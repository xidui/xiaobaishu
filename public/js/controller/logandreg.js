/**
 * Created by apple on 14-2-25.
 */
//lazyctrs.controller('Login', function Login($scope, $http) {
//    function checkloginstate($http){
//        $http({
//            url:'/getloginstate',
//            method:'get'
//        }).success(function(data) {
//                if(data.state)
//                    $scope.loginstate='yes';
//                $scope.loginid=data.loginid;
//            });
//    };
//    checkloginstate($http);
//    $scope.send=function(username,password) {
//        $http({
//            url:'/login',
//            method:'post',
//            data:{
//                username	:	username,
//                password	:	password
//            }
//        }).success(function(data) {
//                if(data.state){
//                    $scope.loginstate='yes';
//                    $scope.loginid=data.loginid;
//                }else {
//                    alert("用户名或密码错误！");
//                }
//                window.location="/#/view/manage"
//                location.reload();
//            });
//    }
//    $scope.logout=function() {
//        $http({
//            url:'/logout',
//            method:'post'
//        }).success(function(data) {
//                if(data.state){
//                    $scope.loginstate='no';
//                    window.location="/#/view/welcome";
//                }
//                location.reload();
//            });
//    }
//    $scope.loginstate='no';
//});

lazyctrs.controller('Register', function Register($scope, $http) {
    $scope.send = function() {
        if($scope.pass != $scope.re_pass){
            alert('两次密码不一致');
            return;
        }
        $http({
            url:'/register',
            method:'post',
            data:{
                name	    : 	$scope.name,
                pass	    :	$scope.pass,
                email		:	$scope.email
            }
        }).success(function(data) {
            var s = '恭喜注册成功';
            if(!data.state)
                s = '抱歉注册失败';
            alert(s);
        });
    }
});

lazyctrs.controller('Login', function Register($scope, $http) {
    $scope.send = function() {
        $http({
            url:'/login',
            method:'post',
            data:{
                name	    : 	$scope.name,
                pass	    :	$scope.pass
            }
        }).success(function(data) {
                if (data.state){
                    window.location = "/";
                }else{
                    alert("登陆失败");
                    window.location.reload();
                }
            });
    }
});