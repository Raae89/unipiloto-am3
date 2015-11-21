angular.module('lab10', ['ngCordova'])

.controller('lab10Controller', function($scope, $cordovaGeolocation){

document.addEventListener('deviceready', function(){
            var options = {
                timeout: 2*1000,
                enablehighAccuracy: true,
                 maximumAge: 0,
            };
navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
            $cordovaGeolocation.getCurrentPosition(options)
                .then(function(position){
                    var myLat = position.coords.latitude;
                    var myLong = position.coords.longitude;

                    console.log(myLat, myLong);

                    $scope.my_latitude = myLat;
                    $scope.my_longitude = myLong;

                });

        }, false);
});