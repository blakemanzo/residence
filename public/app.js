var residence = angular.module('residence', ['ui.router', 'ngAnimate', 'ngMaterial']);

residence.config(function($stateProvider, $urlRouterProvider) {
 $urlRouterProvider.otherwise('/');
 $stateProvider
 .state('main', {
   url: '/',
   templateUrl: '/views/start.html',
   controller: 'mainController as main'
 })
 .state('register', {
  url: '/register',
  templateUrl: '/views/register.html',
  controller: 'registerController as register'
})
 .state('login', {
  url: '/login',
  templateUrl: '/views/login.html',
  controller: 'loginController as login'
})
 .state('overview', {
  url: '/overview',
  templateUrl: '/views/overview.html',
  controller: 'overviewController as overview'
})
 .state('analytics', {
  url: '/analytics',
  templateUrl: '/views/analytics.html',
  controller: 'analyticsController as analytics'
});
});

residence.controller('mainController', function($scope) {
  $scope.pageClass = 'page-main page-right'; 
});
residence.controller('registerController', function($scope) {
  $scope.pageClass = 'page-register page-right';
  rc = this;
  rc.isps = ["First", "Second", "Third", "Fourth"];
});
residence.controller('loginController', function($scope) {
  $scope.pageClass = 'page-login page-right';
});
residence.controller('overviewController', function($scope, $mdDialog) {
  $scope.pageClass = 'page-overview page-right';
  ov = this;
  ov.showConfigure = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: '/partials/overview-dialog.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      escapeToClose: true
    })
  };
  function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  }
});
residence.controller('analyticsController', function($scope) {
  $scope.pageClass = 'page-analytics page-right';
});
residence.directive('residenceMenu', function() {
  return {
    restrict: 'E',
    templateUrl: '/partials/residence-menu.html'
  };
});