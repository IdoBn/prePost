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
  }
    //injecting dependencies into the Config function
    Config.$inject = ['$stateProvider', '$urlRouterProvider'];

  angular.module('prePost.profile', [])
    .config(Config)

}())