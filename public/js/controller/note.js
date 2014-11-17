/**
 * Created by apple on 14-2-25.
 */

lazyctrs.controller('Note',function Note($scope, $http) {
    $http({
        url:'/note/getNotes',
        method:'post',
        data:{}
    }).success(function(data) {
            if(data.state)
                $scope.notes = data.notes;
            console.log(data);
        });

    $scope.createNote = function () {
        $http({
            url:'/note/createNotes',
            method:'post',
            data:{
                content :   $scope.content
            }
        }).success(function(data) {
                if(data.state){
                    window.location.reload();
                }
            });
    }

    $scope.delNote = function (note_id) {
        $http({
            url:'/note/delNote',
            method:'post',
            data:{
                note_id :   note_id
            }
        }).success(function(data) {
                if(data.state){
                    window.location.reload();
                }
            });
    }
});