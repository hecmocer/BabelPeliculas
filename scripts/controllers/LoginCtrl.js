angular.module("moviedb").controller("LoginCtrl", ["$scope","Login", function ($scope, Login) {
	
	//scope init
	$scope.model = {
		username: null
	}

	$scope.login = function (name) {
		console.log("LOGIN", name);
		Login.login(name);
		$scope.$emit("$loggedUser", name);
	}
}])