(function() {

  function ProfileCtrl(log, Friends, stateParams, scope) {
    var _this = this;
    log.debug('ProfileCtrl!!!!');
    scope.friends = Friends.all();
    log.debug(scope.friends);
  }

    ProfileCtrl.$inject = ['$log', 'Friends', '$stateParams', '$scope'];

  angular.module('prePost.profile')
    .controller('ProfileCtrl', ProfileCtrl);

}())