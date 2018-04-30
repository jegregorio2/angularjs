// ang_controller - If no service or route, delete service and route related
app.controller('EmailController', ['$scope', 'emails', '$routeParams', function($scope, emails, $routeParams) {
  	emails.success(function(data) {
    	$scope.email = data[$routeParams.id];
  	});
}]);



