"use strict";

angular.module("ngapp").config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/main");

  $stateProvider.state("main", {
    url: "/main",
    templateUrl: "app/components/main/main.html",
    controller: "MainController",
    controllerAs: "main"
  })
  .state("ngstorage", {
    url: "/ngstorage",
    templateUrl: "app/components/ngstorage/ngstorage.html",
    controller: "NgController",
    controllerAs: "ng"
  });
}]);
