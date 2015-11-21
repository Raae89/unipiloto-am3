angular.module('lab11', ['ngCordova'])

    .controller('lab11Controller', function($scope, $cordovaDevice){

           document.addEventListener("deviceready", function () {

    var device = $cordovaDevice.getDevice();

    var cordova = $cordovaDevice.getCordova();

    var model = $cordovaDevice.getModel();

    var platform = $cordovaDevice.getPlatform();

    var uuid = $cordovaDevice.getUUID();

    var version = $cordovaDevice.getVersion();

      $scope.information = [device, cordova, model, platform, uuid, version];

  }, false);
        
});