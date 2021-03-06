(function() {
    angular
        .module("ReadingFun")
        .config(function($routeProvider){
            $routeProvider
            .when("/home", {
                templateUrl: "view/home/home.view.html",
                controller: "HomeController",
                controllerAs: "homeModel"
            })
            .when("/search", {
                templateUrl: "view/search/search.view.html",
                controller: "SearchController",
                controllerAs: "searchModel"
            })
            .when("/profile", {
                templateUrl: "view/profile/profile.view.html",
                controller: "ProfileController",
                controllerAs: "profileModel"
            })
            .when("/guestprofile", {
                templateUrl: "view/profile_guest/profile_guest.view.html",
                controller: "GuestProfileController",
                controllerAs: "guestModel"
            })
            .when("/register", {
                templateUrl: "view/register/register.view.html",
                controller: "RegisterController",
                controllerAs: "registerModel"
            })
            .when("/login", {
                templateUrl: "view/login/login.view.html",
                controller: "LoginController",
                controllerAs: "loginModel"
            })
            .when("/admin/user", {
                templateUrl: "view/admin/admin_manage_user.view.html",
                controller: "AdminController",
                controllerAs: "adminModel"
            })
            .when("/admin/review", {
                templateUrl: "view/admin/admin_manage_review.view.html",
                controller: "AdminController",
                controllerAs: "adminModel"
            })
            .when("/admin/book", {
                templateUrl: "view/admin/admin_manage_book.view.html",
                controller: "AdminController",
                controllerAs: "adminModel"
            })
            .when("/retrieve", {
                templateUrl: "view/retrieve_pwd/retrieve_pwd.view.html",
                controller: "RetrieveController",
                controllerAs: "retrieveModel"
            })
            .when("/book/:isbn", {
                templateUrl: "view/book/book_details.view.html",
                controller: "BookController",
                controllerAs: "bookModel"
            })
            .when("/review/:reviewId", {
                templateUrl: "view/review/review_details.view.html",
                controller: "ReviewController",
                controllerAs: "reviewModel"
            })
            .when("/user/:userId/order/:orderId", {
                templateUrl: "view/order/order_details.view.html",
                controller: "OrderController",
                controllerAs: "orderModel"
            })
            .otherwise({
                redirectTo: "/home"
            });
        });
}) ();