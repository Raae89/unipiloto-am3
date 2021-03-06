angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
    .state('menu', {
      url: '/side-menu21',
      abstract:true,
      templateUrl: 'templates/menu.html'
    })
      
    
      
        
    .state('menu.page', {
      url: '/page3',
      views: {
        'side-menu21': {
          templateUrl: 'templates/page.html',
          controller: 'pageCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.page2', {
      url: '/page4',
      views: {
        'side-menu21': {
          templateUrl: 'templates/page2.html',
          controller: 'page2Ctrl'
        }
      }
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/side-menu21/page3');

});