 angular.module('lab67', ['ngRoute', 'lab6', 'lab7'])
               .config(['$routeProvider', function($routeProvider){

                    /*
                     * `when()` cuantas veces sea necesario
                     * `otherwise()` una sola vez "OJO"
                    */
                    $routeProvider

                .when('/motion', {
                    templateUrl : "views/lab6.html",
                    controller: 'lab6Controller'
                })

                .when('/network', {
                    templateUrl: "views/lab7.html",
                    controller: 'lab7Controller'
                })

               
                
                .otherwise({
                    redirectTo: '/'
                });

            }])