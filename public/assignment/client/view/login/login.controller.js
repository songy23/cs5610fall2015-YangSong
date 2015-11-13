(function() {
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);
    
    function LoginController($scope, $location, $rootScope, UserService) {
        $scope.$location = $location;
        
        $scope.login = function() {
            UserService.findUserByUsernameAndPassword($scope.username, $scope.password, callback).then(function(response) {
                if (response != null) {
                    console.log("Log in successfully"); 
                    $rootScope.user = response;
                    $location.url("/profile");
                } 
            });
        }
        
        
        function callback(user) {
            if (user != null) {
                console.log("Log in successfully"); 
                $rootScope.user = user;
                $location.url("/profile");
            }   
        }
    }
}) ();