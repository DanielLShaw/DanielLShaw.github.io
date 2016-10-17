var app = angular.module('portfolioApp')

var controller = app.controller('footerController',['$scope',function($scope){
 console.log('LOADED: footerController');

 $scope.links = [
     {
         url:'https://www.linkedin.com/in/daniellshaw',
         text:'LinkedIn',
         icon:'../resources/images/icons/linkedin.svg'
     },
        {
         url:'https://github.com/DanielLShaw/DanielLShaw.github.io',
         text:'GitHub',
         icon:'../resources/images/icons/github.svg'
     }
 ]
}])
