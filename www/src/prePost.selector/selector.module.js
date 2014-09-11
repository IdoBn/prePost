(function() {

  function Config(stateProvider, urlRouterProvider) {
    stateProvider
      .state('app.selector', {
        url: '/selector',
        views: {
          'tab-selector': {
            templateUrl: 'src/prePost.selector/selector.html',
            controller: 'SelectorCtrl'
          }
        }
      })
  }
    //injecting dependencies into the Config function
    Config.$inject = ['$stateProvider', '$urlRouterProvider'];


  angular.module('prePost.selector', [])
    .config(Config)

}())