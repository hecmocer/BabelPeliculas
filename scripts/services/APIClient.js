angular.module("moviedb").service("APIClient",
    ["$http", "$q", "apiPaths", function($http, $q, apiPaths){

        // Petición GET al API en la url pasada como parámetro
        this.apiGetRequest = function(url){
            // Crear el objeto diferido
            var deferred = $q.defer();

            // Hacer trabajo asíncrono
            $http.get(url).then(
                // Petición OK
                function(response){
                    // Resolver la promesa
                    deferred.resolve(response.data);
                },
                // Petición KO
                function(response){
                    // Rechazar la promesa
                    deferred.reject(response.data);
                });

            // Devolver la promesa
            return deferred.promise;
        };

        /*

        PREGUNTAR
        EN POSTMAN EL POST NO FUNCIONA

        */

        // Petición POST al API en la url y con los datos para crear pasados como parámetro
        this.apiPostRequest = function(url, data_to_post){
            // Crear el objeto diferido
            var deferred = $q.defer();

            // Hacer trabajo asíncrono
            $http.post(url, data_to_post).then(
                // Petición OK
                function(response){
                    // Resolver la promesa
                    deferred.resolve(response.data);
                },
                // Petición KO
                function(response){
                    // Rechazar la promesa
                    deferred.reject(response.data);
                });

            // Devolver la promesa
            return deferred.promise;
        };

        // Petición PUT al API en la url con los datos para modifical pasados como parámetro
        this.apiPutRequest = function(url, data_to_put){
            // Crear el objeto diferido
            var deferred = $q.defer();

            // Hacer trabajo asíncrono
            $http.put(url, data_to_put).then(
                // Petición OK
                function(response){
                    // Resolver la promesa
                    deferred.resolve(response.data);
                },
                // Petición KO
                function(response){
                    // Rechazar la promesa
                    deferred.reject(response.data);
                });

            // Devolver la promesa
            return deferred.promise;
        };

        // Petición get del catálogo de películas
        this.getMovieList = function(){
            return this.apiGetRequest(apiPaths.movies);
        };

        // Petición get de una película en particular
        this.getMovie = function(movieId){
            var url = apiPaths.movie + movieId;
            return this.apiRequest(url);
        };

        // Petición post que inserta una película
        this.addMovie = function(movie){
            return this.apiPostRequest(apiPaths.movies, movie);
        };

        // TODO
        // Petición put que alquila una película
        this.rentMovie = function(){
            /*this.apiPutRequest(apiPaths.movies, DATA );*/
        };

        // TODO
        // Petición put que desalquila una película
        this.returnMovie = function(){
            /*this.apiPutRequest(apiPaths.movies, DATA );*/
        }

        // TODO
        // Petición get que devuelve solo las peliculas que ha creado el usuario
        this.getCreatedMovieList = function(){
            // Crear el objeto diferido
            var deferred = $q.defer();

            // Trabajo asíncrono: petición get de películas
            this.getMovieList().then(
                // Petición OK
                function(response){
                    // Resolver la promesa

                    // FILTRAR

                    deferred.resolve(response.data);
                },
                // Petición KO
                function(response){
                    // Rechazar la promesa
                    deferred.reject(response.data);
                });


            // Devolver la promesa
            return deferred.promise;
        };

        // TODO
        // Petición get que devuelve solo las peliculas que ha creado el usuario
        this.getRentedMovieList = function(){
            // FILTRAR AL IGUAL QUE EN CREATEDLIST
        };

    }
    ]);







/*
angular.module("moviedb").service("APIClient",
    ['$http', '$q', "apiPaths", "URL" , function($http, $q, apiPaths, URL){

        this.apiRequest = function(url){
            // Crear el objeto diferido
            var deferred = $q.defer();

            // Hacer trabajo asíncrono
            $http.get(url).then(
                // Petición OK
                function(response){
                    // Resolver la promesa
                    deferred.resolve(response.data);
                },
                // Petición KO
                function(response){
                    // Rechazar la promesa
                    deferred.reject(response.data);
                });

            // Devolver la promesa
            return deferred.promise;
        }

        this.getMovies = function(){
            return this.apiRequest(apiPaths.movies);
        };

        this.getMovie = function(movieId){
            var url = URL.resolve(apiPaths.movieDetail, { id: movieId});
            return this.apiRequest(url);
        }

        this.getSeries = function(){
            return this.apiRequest(apiPaths.series);
        };

        this.getSerie = function(serieId){
            var url = URL.resolve(apiPaths.serieDetail, { id: serieId});
            return this.apiRequest(url);
        }

        this.createMovie = function(movie){
            // Crear el objeto diferido
            var deferred = $q.defer();

            // Hacer trabajo asíncrono
            $http.post(apiPaths.movies, movie).then(
                // Petición OK
                function(response){
                    // Resolver la promesa
                    deferred.resolve(response.data);
                },
                // Petición KO
                function(response){
                    // Rechazar la promesa
                    deferred.reject(response.data);
                });

            // Devolver la promesa
            return deferred.promise;
        };
    }]
    );
*/