var app = angular.module('portfolioApp')

var controller = app.controller('creditsController',['$scope',function($scope){
 console.log('LOADED: creditsController');

 $scope.credits = [
     {
         url:'http://www.flaticon.com/authors/dave-gandy',
         text:'Github SVG',
         owner: 'Dave Gandy'
     },
    {
         url:'http://www.flaticon.com/authors/plainicon',
         text:'LinkedIn SVG',
         owner: 'Plainicon'
     },
    {
         url:'http://www.flaticon.com/authors/madebyoliver',
         text:'Search Icon SVG',
         owner: 'Madebyoliver'
     },
         {
         url:'http://www.flaticon.com/packs/seo-and-development-7',
         text:'Seo and development icons',
         owner: 'Maxim Basinski'
     }
 ]
}])
