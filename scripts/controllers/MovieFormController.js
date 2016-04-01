angular.module("moviedb").controller("MovieFormController",
    [ "$scope", "APIClient", "paths", "Login", function($scope, APIClient, paths, Login){

        // Scope init
        $scope.model = {};
        $scope.percent_progress_ok = 0;
        $scope.successMessage = null;
        $scope.errorMessage = null;

        updateFieldValidation = function(newValue, oldValue){
            if(newValue){
                $scope.percent_progress_ok += 20;
            }else{
                $scope.percent_progress_ok -= 20;
            }
        }

        updateFieldPristine = function(newValue, oldValue){

        }

        $scope.$watch('movieForm.title.$valid', function(newValue, oldValue) {
            updateFieldValidation(newValue, oldValue);
        });
        $scope.$watch('movieForm.cover.$valid', function(newValue, oldValue) {
            updateFieldValidation(newValue, oldValue);
        });
        $scope.$watch('movieForm.video_url.$valid', function(newValue, oldValue) {
            updateFieldValidation(newValue, oldValue);
        });
        $scope.$watch('movieForm.release_date.$valid', function(newValue, oldValue) {
            updateFieldValidation(newValue, oldValue);
        });
        $scope.$watch('movieForm.rating.$valid', function(newValue, oldValue) {
            updateFieldValidation(newValue, oldValue);
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