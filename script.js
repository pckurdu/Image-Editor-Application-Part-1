var app=angular.module('myApp',['ngRoute']);

const {remote}=require('electron')


app.controller('frameCtrl',function($scope){

    var win=remote.getCurrentWindow();
    $scope.close=function(){
        win.close();
    }
    $scope.max=function(){
        if(win.isMaximized()){
            win.unmaximize()
        }else{
            win.maximize()
        }
    }
    $scope.min=function(){
        win.minimize();
    }

});