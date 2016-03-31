angular.module("moviedb").controller("MovieDetailController", ["$scope", "$routeParams", "$location", "APIClient", "paths", "$sce", "Login",
    function($scope, $routeParams, $location, APIClient, paths, $sce, Login) {

        // Scope init
        $scope.model = {}
        $scope.uiState = "loading";

        $scope.trustSrc = function() {
            return $sce.trustAsResourceUrl($scope.model.video_url);
        }

        $scope.currentUser = function() {
            return Login.currentUser();
        }

        $scope.rentMovie = function() {
            APIClient.rentMovie($scope.model, Login.currentUser());
            // $scope.$emit("$rentedMovie", $scope.model);
        }

        // Controller init
        APIClient.getMovie($routeParams.id).then(
            // Pelicula encontrada
            function(movie) {
                $scope.model = movie;
                if ($scope.model.length == 0) {
                    $scope.uiState = 'blank';
                } else {
                    $scope.uiState = 'ideal';
                    $scope.$emit("$changeTitle", movie.title);
                }
            },
            // Pelicula no encontrada
            function(error) {
                $location.url(paths.error);
                $scope.uiState = 'error';
            }
        );

    }
]);
