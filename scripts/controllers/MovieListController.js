angular.module("moviedb").controller("MovieListController",
    ["$scope", "APIClient", "paths", function($scope, APIClient, paths){

    // Scope init
    $scope.model = [];
    $scope.uiState = 'loading';

    APIClient.getMovieList().then(
        // Lista de peliculas encontradas
        function(data){
            $scope.model = data || "";
            if($scope.model.length == 0){
                $scope.uiState = 'blank';
            } else {
                $scope.uiState = 'ideal';
            }
        },
        // Promesa rechazada
        function(error){
            $scope.uiState = 'error';
        });
}
]);