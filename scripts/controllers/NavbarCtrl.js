angular.module("moviedb").controller("NavbarCtrl", ["$scope", "$location", "paths", function($scope, $location, paths) {
    $scope.model = {
        selectedItem: $location.path()
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

    // scope event listeners
    $scope.$on("$locationChangeSuccess", function(evt, currentRoute) {
        $scope.model.selectedItem = $location.path();
    });
}])
