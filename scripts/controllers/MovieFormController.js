angular.module("moviedb").controller("MovieFormController",
    [ "$scope", "APIClient", "paths", "Login", function($scope, APIClient, paths, Login){

        // Scope init
        $scope.model = {};
        $scope.percent_progress = {};
        $scope.successMessage = null;
        $scope.errorMessage = null;

        $scope.$watch('movieForm.title.$valid', function(newValue, oldValue) {
            console.log("CAMBIO title", newValue);
        });
        $scope.$watch('movieForm.cover.$valid', function(newValue, oldValue) {
            console.log("CAMBIO cover", newValue);
        });
        $scope.$watch('movieForm.video_url.$valid', function(newValue, oldValue) {
            console.log("CAMBIO video_url", newValue);
        });
        $scope.$watch('movieForm.release_date.$valid', function(newValue, oldValue) {
            console.log("CAMBIO relase_date", newValue);
        });
        $scope.$watch('movieForm.rating.$valid', function(newValue, oldValue) {
            console.log("CAMBIO rating", newValue);
        });


        // Scope methods
        $scope.saveMovie = function(){
            APIClient.addMovie($scope.model, Login.currentUser()).then(
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