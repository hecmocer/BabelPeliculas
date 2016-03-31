angular.module("moviedb").controller("MovieDetailController",
    ["$scope", "$routeParams", "$location", "APIClient", "paths", "$sce",
    function($scope, $routeParams, $location, APIClient, paths, $sce){

        // Scope init
        $scope.model = {};

        $scope.trustSrc = function() {
            return $sce.trustAsResourceUrl($scope.model.video_url);
        }

        // Controller init
        APIClient.getMovie($routeParams.id).then(
            // Pelicula encontrada
            function(movie){
                $scope.model = movie;
            },
            // Pelicula no encontrada
            function(error){
                $location.url(paths.error);
            }
            );

    }
    ]);