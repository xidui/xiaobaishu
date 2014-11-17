'use strict';

/* Controllers */

var lazyctrs = angular.module('lazyctrs', []);

lazyctrs.controller('PageNav', function PageNav($scope, $http) {
  	$scope.changeview = function (view) {
  		$scope.view = view;
  	}

    $scope.logout = function (){
        $http({
            url:'/logout',
            method:'post',
            data:{
            }
        }).success(function(data) {
                if (data.state){
                    window.location = "/";
                }
            });
    }

    $http({
        url:'/navitem',
        method:'post',
        data:{
        }
    }).success(function(data) {
            $scope.items = data.items;
        });
});

//document.write('<script src="js/controller/care.js"></script>');
//document.write('<script src="js/controller/task.js"></script>');
//document.write('<script src="js/controller/item.js"></script>');
document.write('<script src="js/controller/logandreg.js"></script>');
document.write('<script src="js/controller/essay.js"></script>');
document.write('<script src="js/controller/note.js"></script>');
//document.write('<script src="js/controller/newthings.js"></script>');