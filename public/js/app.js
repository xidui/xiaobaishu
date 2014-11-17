var lazy = angular.module('lazy', [
  	'ngRoute',
  	'lazyctrs'
]);

lazy.config(['$routeProvider',
  	function($routeProvider) {
    	$routeProvider.
      	when('/view/register', {
        	templateUrl: '/view/register'
      	}).
        when('/view/login', {
            templateUrl: '/view/login'
        }).
        when('/view/note', {
            templateUrl: '/view/note'
        }).
        when('/view/essay', {
            templateUrl: '/view/essay'
        }).
   		otherwise({redirectTo: '/index'});
}]);