var app = angular.module('portfolioApp')

var controller = app.controller('homeController',['$scope',function($scope){
 console.log('LOADED: homeController')
     $scope.pagename = "home controller"

}])

    function link(scope,element,attrs){
        var window = angular.element($window)
        window.on('scroll', function() {
            //calculate the distance in pixels from the top of the element to the top of the window
            var elementPosition = element[0].offsetTop;
            var scrollAmount = window[0].pageYOffset 
            var distanceFromTop = elementPosition-scrollAmount;
            //if the element is going off screen
            if(distanceFromTop < 0){
                //reduce the opacity linearly to 0 as the element leaves the page entirely
                var opacity = 1 + (distanceFromTop/ element[0].offsetHeight);
                element.css("opacity",opacity);
            }
        });
    }
    return{
        link:link
    }
}]);

