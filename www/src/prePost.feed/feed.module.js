(function() {

  function Config(stateProvider, urlRouterProvider) {
    stateProvider
      .state('app.feed', {
        url: '/feed',
        views: {
          'tab-feed': {
            templateUrl: 'src/prePost.feed/feed.html',
            controller: 'FeedCtrl'
          }
        }
      })

    urlRouterProvider.otherwise('/app/feed');
  }
    //injecting dependencies into the Config function
    Config.$inject = ['$stateProvider', '$urlRouterProvider'];

  angular.module('prePost.feed', [])
    .config(Config)

}())