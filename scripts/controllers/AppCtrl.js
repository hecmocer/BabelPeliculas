angular.module("moviedb").controller("AppCtrl", ["$scope", "$location", "paths", function($scope, $location, paths) {
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

    // scope event listeners
    $scope.$on("$locationChangeSuccess", function (evt, currentRoute) {
    	$scope.model.title = controller.titles[$location.path()] || "404 Not Found";
    	console.log("TITULO",$scope.model.title);
    });

    $scope.$on("$changeTitle", function (evt, title) {
        $scope.model.title = title;
    })
}]);