angular.module("moviedb").controller("MovieFormController",
    [ "$scope", "APIClient", "paths", function($scope, APIClient, paths){

        // Scope init
        $scope.model = {};
        $scope.successMessage = null;
        $scope.errorMessage = null;

        // Scope methods
        $scope.saveMovie = function(){
            APIClient.addMovie($scope.model).then(
                function(movie){
                    $scope.successMessage = "Película guardada! <a href='#" + paths.movies + "/" + movie.id + "'><br>Ver detalle de la película</a>";
                    $scope.model = {};
                    $scope.movieForm.$setPristine();
                },
                function(error){
                    $scope.errorMessage = "Ups! No hemos conseguido guardar tu película :_("
                }
                )
        };

    }]
    );