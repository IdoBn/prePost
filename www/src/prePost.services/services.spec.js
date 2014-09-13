describe("prePost.services", function() {
	// get the module that contains the service
	beforeEach(module('prePost.services'));

	// jasmine matcher
	beforeEach(function() {
	  this.addMatchers({
	    toBeArray: function() {
	      return {
	        compare: function(actual, expected) {
	          return {
	            pass: actual.constructor == Array
	          };
	        }
	      };
	    }
	  });
	});

	describe("Friends Service", function() {
		beforeEach(inject(function($injector) {
			// use the $injector to get a hold of the service
			friends = $injector.get('Friends')
		}))

		it('.all()', function() {
			expect(friends.all()).toBeArray();
		});

		it('.get()', function() {
			expect(friends.get(0).name).toBe('Scruff McGruff');
		})
	});
});
