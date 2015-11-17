"use strict";

angular.module("ngapp").controller("NgController", function(shared, $state, $scope, $localStorage, $sessionStorage){

    var ctrl = this;

    this.storage = $localStorage; // Persistent, also can be loaded anywhere (Clear all: $ delete this.storage) (Clear obj: $ delete this.storage.obj)

    this.session = $sessionStorage; // Volatile, is destroyed by leaving or reloading the view

    this.title = "ngStorage";

    this.user;

    this.email;

    this.comment;

    this.usuID = this.session.usuID;

    this.cliID = this.session.cliID;

    this.save = function(){
      ctrl.storage.profile = { user: ctrl.user, email: ctrl.email, comment: ctrl.comment };

      ctrl.session = { usuID: 1313, cliID: 13 };

      ctrl.usuID = ctrl.session.usuID;

      ctrl.cliID = ctrl.session.cliID;

      console.log(ctrl.session);
    }

    this.load = function(){
      var profile = ctrl.storage.profile;
      console.log(ctrl.storage);

      ctrl.user = profile.user;
      ctrl.email = profile.email;
      ctrl.comment = profile.comment;

      console.log(ctrl.session);

      ctrl.usuID = ctrl.session.usuID;
      ctrl.cliID = ctrl.session.cliID;
    }

    this.back = function(){
      $state.go("main");
    }
});
