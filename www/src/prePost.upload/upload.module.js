(function() {

  function Config(stateProvider, urlRouterProvider) {
    stateProvider
      .state('app.upload', {
        url: '/upload',
        views: {
          'tab-upload': {
            templateUrl: 'src/prePost.upload/upload.html',
            controller: 'UploadCtrl'
          }
        }
      })
  }
    //injecting dependencies into the Config function
    Config.$inject = ['$stateProvider', '$urlRouterProvider'];

  angular.module('prePost.upload', [])
    .config(Config);

}());