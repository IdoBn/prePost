(function() {

  function UploadCtrl(log) {
    log.debug('upload controller!');
  }
    UploadCtrl.$inject = ['$log'];

  angular.module('prePost.upload')
    .controller('UploadCtrl', UploadCtrl)

}())