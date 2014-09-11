// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
(function() {

  /**
  The Run function
  **/
  function Run(ionicPlatform, rootScope, log, $window) {
    rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      log.debug('state change', {'to state': toState,'to params': toParams,'from state': fromState,'from params': fromParams});
    });

    ionicPlatform.ready(function() {
      if($window.cordova && $window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if($window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  }
    //injecting dependencies into the Run function
    Run.$inject = ['$ionicPlatform', '$rootScope', '$log', '$window'];


  /**
  The Config function
  **/
  function Config(stateProvider, urlRouterProvider) {
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    stateProvider
      // setup an abstract state for the tabs directive
      .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "src/prePost.main/tabs.html"
      })
      // Each tab has its own nav history stack:
      .state('app.profile-detail', {
        url: '/profile/:profileId',
        views: {
          'tab-profile': {
            templateUrl: 'src/templates/friend-detail.html',
            controller: 'FriendDetailCtrl'
          }
        }
      })
    // if none of the above states are matched, use this as the fallback
    urlRouterProvider.otherwise('/app/feed');
  }
    //injecting dependencies into the Config function
    Config.$inject = ['$stateProvider', '$urlRouterProvider'];

  angular.module('prePost', [
    'ionic', 
    'starter.controllers',
    'starter.services',
    'prePost.upload',
    'prePost.feed',
    'prePost.selector',
    'prePost.profile'
    ])
    .run(Run)
    .config(Config)
}());
