describe("prePost.upload", function() {
	// get the module that contains the controller
	beforeEach(module('prePost.upload'));

	beforeEach(inject(function($rootScope, $controller) {
		// create a fresh new scope for the controller
		scope = $rootScope.$new();
		// create a controller with this scope
		ctrl = $controller('UploadCtrl',{$scope: scope});
	}));
});