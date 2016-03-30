// Definimos el módulo
angular.module("moviedb", ["ngRoute"]).config(
    ["$routeProvider", "paths", function($routeProvider, paths){

        // Configuro las URLs de la aplicación
        $routeProvider.when(paths.root, {
            redirectTo: paths.home
        }).when(paths.home, {
            templateUrl: "views/Home.html"
        }).when(paths.movies, {
            templateUrl: "views/MovieList.html"
        }).when(paths.movie, {
            templateUrl: "views/MovieDetail.html"
        }).when(paths.play, {
            templateUrl: "views/Player.html"
        }).when(paths.newMovie, {
            templateUrl: "views/NewMovie.html"
        }).otherwise({
            templateUrl: "views/404.html"
        });