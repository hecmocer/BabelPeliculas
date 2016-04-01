angular.module("moviedb").controller("HomeCtrl", ["$scope", "APIClient", "Login", function($scope, APIClient, Login) {

    // model init

    $scope.model = [];
    $scope.uiState = 'loading';
    getRentedMovies();

    function getRentedMovies () {
        APIClient.getRentedMovieList(Login.currentUser()).then(
        // Lista de peliculas encontradas
        function(data) {
            $scope.model = data;
            if ($scope.model.length == 0) {
                $scope.uiState = 'blank';
            } else {
                $scope.uiState = 'ideal';
            }
        },
        // Promesa rechazada
        function(error) {
            $scope.uiState = 'error';
        });
    }

    $scope.$on("$userchange", function (evt, user) {
        $scope.model = [];
        getRentedMovies();
    })
}])
