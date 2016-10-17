var portfolioApp = angular.module('portfolioApp',['ngRoute','ngMaterial']);

portfolioApp.config(['$routeProvider',function($routeProvider){
  $routeProvider
    .when('/home',{
      templateUrl:"pages/home/home.html",
      controller:"homeController"
    })
    .when('/projects',{
      templateUrl:"pages/projects/projects.html",
      controller:"projectsController"
    })
    .when('/contact',{
      templateUrl:"pages/contact/contact.html",
      controller:"contactController"
    })
    .when('/credits',{
      templateUrl:"pages/credits/credits.html",
      controller:"creditsController"
    })
    .otherwise({redirectTo: '/home'});
}
]);

portfolioApp.directive('header', function () {
    return {
        restrict: 'A',
        replace: true,
         scope:true,
        templateUrl: "./common/header.html",
        controller: 'headerController'
    }
});

portfolioApp.directive('footer', function () {
    return {
        restrict: 'A',
        replace: true,
        scope:true,
        templateUrl: "./common/footer.html",
        controller: 'footerController'
    }
});

portfolioApp.config(function($mdThemingProvider) {
  $mdThemingProvider
    .theme('default')
    .primaryPalette('amber')
    .accentPalette('brown')
    .warnPalette('red')
    .backgroundPalette('grey');
});