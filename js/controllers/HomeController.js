// ang_controller - If no service or route, delete service and route related
app.controller('HomeController', ['$scope', 'emails', function($scope, emails) {
  	emails.success(function(data) {
    	$scope.emails = data;
  	});  
}]);



 