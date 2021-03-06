(function() {
    angular
        .module("ReadingFun")
        .controller("HomeController", HomeController);
    
    function HomeController($location, $rootScope, UserService, ReviewService, BookService) {
        var homeModel = this;
        homeModel.$location = $location;
        homeModel.userCount = 0;
        homeModel.reviewCount = 0;
        homeModel.books = [];
        homeModel.users = [];
        BookService.findAllLocalBook().then(function(response) {
            if (response.length > 25) {
                var temp = [];
                for (var j = 0; j < 25; j++) {
                    temp.push(response[j]);
                }
                response = temp;
            }
            homeModel.books = response;
        });
        var coverUrl = "http://covers.openlibrary.org/b/isbn/";
        
        UserService.findAllUsers().then(function(response) {
            homeModel.userCount = response.length;
            for (var i = 0; i < response.length; i++) {
                if ($rootScope.user != null && $rootScope.user._id == response[i]._id)
                    continue;
                if (!response[i].isAdmin)
                    homeModel.users.push(response[i]);
            }
        });
        
        $(init);
        
        function init() {
            ReviewService.findAllReviews().then(function(reviews) {
                homeModel.reviewCount = reviews.length;
                var displayCnt = Math.min(25, reviews.length);
                for (var i = 0; i < displayCnt; i++) {
                    BookService.findBookByISBN(reviews[i].isbn).then(function(response) {
                        retrieveaJSON(response);
                    });
                }
            });

            function retrieveaJSON(response) {
                $.ajax({
                    url: response,
                    dataType: "json",
                    success: setScope
                });
            }
            
            var idx = 25;
            
            function setScope(bookJSON) {
                var cover = coverUrl + bookJSON.docs[0].isbn[0] + "-S.jpg";
                homeModel.books.push(bookJSON.docs[0]);
                var tr_new = $("#template").clone();
                tr_new.find(".t1").html(idx);
                tr_new.find(".t2").html('<a href="#/book/' + bookJSON.docs[0].isbn[0] + '">' + bookJSON.docs[0].isbn[0] + '</a>');
                tr_new.find(".t3").html(bookJSON.docs[0].title);
                tr_new.find(".t4").html(bookJSON.docs[0].author_name[0]);
                tr_new.find(".t5").html(bookJSON.docs[0].first_publish_year);
                tr_new.find(".t6").html('<img src="' + cover + '">');
                $("#container").append(tr_new);
                idx++;
            }
        }
        
        homeModel.redirect = function($index) {
            $rootScope.profile_user = homeModel.users[$index];
            $location.url("/guestprofile");
        }
    }
}) ();