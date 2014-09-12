(function() {

  function Config(stateProvider, urlRouterProvider) {
    stateProvider
      .state('app.profile', {
        url: '/profile',
        views: {
          'tab-profile': {
            templateUrl: 'src/prePost.profile/profile.html',
            controller: 'ProfileCtrl',
            controllerAs: 'profile'
          }
        }
      })
      .state('app.profile-detail', {
        url: '/profile/:profileId',
        views: {
          'tab-profile': {
            templateUrl: 'src/prePost.profile/profile-detail.html',
            controller: 'ProfileDetailCtrl'
          }
        }
      })
  }
    //injecting dependencies into the Config function
    Config.$inject = ['$stateProvider', '$urlRouterProvider'];

  angular.module('prePost.profile', [])
    .config(Config)

}())