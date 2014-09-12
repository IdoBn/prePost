(function() {

  function ProfileDetailCtrl(scope, stateParams, Friends) {
    scope.friend = Friends.get(stateParams.profileId);
  }

    ProfileDetailCtrl.$inject = ['$scope', '$stateParams', 'Friends'];

  angular.module('prePost.profile')
    .controller('ProfileDetailCtrl', ProfileDetailCtrl)

}())