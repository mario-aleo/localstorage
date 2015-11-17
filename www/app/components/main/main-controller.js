"use strict";

angular.module("ngapp").controller("MainController", function(shared, $state, $scope, $localStorage, $sessionStorage){

    var ctrl = this;

    this.storage = $localStorage;

    this.session = $sessionStorage;

    this.title = "Main";

    console.log(this.storage);

    console.log(this.session);
});
