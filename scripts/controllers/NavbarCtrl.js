angular.module("moviedb").controller("NavbarCtrl", ["$scope", "$location", "paths", "Login", function($scope, $location, paths, Login) {
    $scope.model = {
        selectedItem: $location.path(),
        currentUser: Login.currentUser()
    };
    $scope.paths = paths;

    // metodos del scope
    $scope.setSelectedItem = function(item) {
        $scope.model.selectedItem = item;
    }

    $scope.getClassForItem = function(item) {
        if ($scope.model.selectedItem == item) {
            return "active";
        } else {
            return "";
        }
    }

    $scope.logout = function () {
    	Login.logout();
        $scope.$emit("$loggedOut");
        $scope.model.currentUser = Login.currentUser();
    }

    // scope event listeners
    $scope.$on("$locationChangeSuccess", function(evt, currentRoute) {
        $scope.model.selectedItem = $location.path();
    });

    $scope.$on("$navbarUsername", function (evt, user) {
        $scope.model.currentUser = user.name;
    })
}])
