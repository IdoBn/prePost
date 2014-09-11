(function() {

  function SelectorCtrl(log) {
    log.debug('Selector Controller!!!');
  }

    SelectorCtrl.$inject = ['$log'];

  angular.module('prePost.selector')
    .controller('SelectorCtrl', SelectorCtrl)

}())