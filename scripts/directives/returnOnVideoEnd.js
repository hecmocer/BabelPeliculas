angular.module("moviedb").directive("returnOnVideoEnd", function () {
	return {
		scope: {
			returnOnVideoEnd: "&"
		},
		link: function ($scope, elem) {
			elem.bind("ended", function () {
                $scope.returnOnVideoEnd();
			})
		}
	}
})