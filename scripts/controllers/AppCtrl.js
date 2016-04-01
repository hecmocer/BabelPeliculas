angular.module("moviedb").controller("AppCtrl", ["$scope", "$location", "paths", "Login", function($scope, $location, paths, Login) {
    var controller = this;

    // controller properties
    controller.titles = {};
    controller.titles[paths.home] = "Home";
    controller.titles[paths.movies] = "Movies";
    controller.titles[paths.newMovie] = "Upload";

    // model init
    $scope.model = { // es buena practica tener un objeto para el modelo
        title: "",
        user: null
    };


    $scope.model.user = Login.currentUser();

    // methods
    controller.updateUser = function (name) {
    	$scope.model.user = name;
    	$scope.$broadcast("$userchange", {name: name});
    }

    // scope event listeners
    $scope.$on("$locationChangeSuccess", function(evt, currentRoute) {
        $scope.model.title = controller.titles[$location.path()] || "404 Not Found";
        $scope.model.user = Login.currentUser();
    });

    $scope.$on("$changeTitle", function(evt, title) {
        $scope.model.title = title;
    })

    $scope.$on("$loggedUser", function (evt, name) {
    	controller.updateUser(name);
    })

    $scope.$on("$loggedOut", function (evt) {
    	controller.updateUser(null);
    })
}]);
