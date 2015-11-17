"use strict";

angular.module("ngapp").controller("SqlController", function(shared, $state, $scope, $mdSidenav, $mdComponentRegistry){

    var ctrl = this;


    ctrl.auth = shared.info.auth;


    ctrl.toggle = angular.noop;


    ctrl.seed = function(){
        alert(shared.info.title);
    };


    ctrl.link = function(){
        alert("https://github.com/marioaleogolsat/cordova-angular-angularMaterial-seed");
    };


    ctrl.isOpen = function() { return false };
    $mdComponentRegistry
    .when("right")
    .then( function(sideNav){
      ctrl.isOpen = angular.bind( sideNav, sideNav.isOpen );
      ctrl.toggle = angular.bind( sideNav, sideNav.toggle );
    });


    ctrl.toggleRight = function() {
    $mdSidenav("right").toggle()
        .then(function(){
        });
    };


    ctrl.close = function() {
    $mdSidenav("right").close()
        .then(function(){
        });
    };


    $scope.$watch("$state.current.title", function() {
        if(ctrl.title != $state.current.title)
        ctrl.title = $state.current.title;
    }, true);
});
