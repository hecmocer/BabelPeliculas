angular.module("moviedb").service("APIClient",
    ["$http", "$q", "apiPaths", "$filter",
    function($http, $q, apiPaths, $filter){

        // Petición GET al API en la url pasada como parámetro
        this.apiGetRequest = function(url){
            console.log("GET", url);

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

        // Petición POST al API en la url y con los datos para crear pasados como parámetro
        this.apiPostRequest = function(url, data_to_post){
            console.log("POST", data_to_post);

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
            console.log("PUT", data_to_put);

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
            var url = apiPaths.movies + movieId;
            return this.apiGetRequest(url);
        };

        // Petición post que inserta una película
        this.addMovie = function(movie){
            return this.apiPostRequest(apiPaths.movies, movie);
        };

        // Petición put que alquila una película
        this.rentMovie = function(data, user){
            data.rented_by = user;
            this.apiPutRequest(apiPaths.movies, data);
        };

        // Petición put que desalquila una película
        this.returnMovie = function(data, user){
            if(data.rented_by === user){
                data.rented_by = null;
                this.apiPutRequest(apiPaths.movies, data);
            }
            else{
                console.log("CUIDADO! un usuario ha intentado desalquilar una pelicula que no es suya");
            }
        }

        // Petición get que devuelve solo las peliculas que ha creado el usuario
        this.getCreatedMovieList = function(user){
            // Crear el objeto diferido
            var deferred = $q.defer();

            // Trabajo asíncrono: petición get de películas
            this.getMovieList().then(
                // Petición OK
                function(response){
                    // Resolver la promesa

                    // funcion de filtrado 'filtro'
                    var filtro = $filter('filter');
                    var search = {
                        owner: user
                    }

                    deferred.resolve(filter(response.data, search));
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
        this.getRentedMovieList = function(user){
            // Crear el objeto diferido
            var deferred = $q.defer();

            // Trabajo asíncrono: petición get de películas
            this.getMovieList().then(
                // Petición OK
                function(response){
                    // Resolver la promesa

                    // funcion de filtrado 'filtro'
                    var filtro = $filter('filter');
                    var search = {
                        rented_by: user
                    }

                    deferred.resolve(filter(response.data, search));
                },
                // Petición KO
                function(response){
                    // Rechazar la promesa
                    deferred.reject(response.data);
                });


            // Devolver la promesa
            return deferred.promise;
        };

    }
    ]);