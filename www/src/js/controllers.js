angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $log) {
  $log.debug("I'm here!!!");
})

.controller('FriendsCtrl', function($scope, Friends, $log) {
  $log.debug("I'm here!!!");
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.profileId);
})

.controller('AccountCtrl', function($scope) {
});
