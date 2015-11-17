"use strict";

angular.module("ngapp").config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/main");

    $stateProvider.state("main", {
        url: "/main",
        templateUrl: "app/components/main/main.html",
        controller: "MainController",
        controllerAs: "main"
    })
    .state("localstorage", {
        url: "/localstorage",
        templateUrl: "app/components/localstorage/localstorage.html",
        controller: "LocalController",
        controllerAs: "local"
    })
    .state("ngstorage", {
        url: "/ngstorage",
        templateUrl: "app/components/ngstorage/ngstorage.html",
        controller: "NgController",
        controllerAs: "ng"
    })
    .state("sqlite", {
        url: "/sqlite",
        templateUrl: "app/components/sqlite/sqlite.html",
        controller: "SqlController",
        controllerAs: "sql"
    });

}]);
