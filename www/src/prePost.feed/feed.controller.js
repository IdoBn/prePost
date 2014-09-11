(function() {

  function FeedCtrl(log) {
    log.debug('FeedCtrl!!!!');
  }

    FeedCtrl.$inject = ['$log'];

  angular.module('prePost.feed')
    .controller('FeedCtrl', FeedCtrl);

}())