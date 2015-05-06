/**
 * Created by GDU on 24/04/2015.
 */
angular.module('myApp').controller('SlidesController', ['$scope', '$location', '$routeParams', function($scope,$location,$routeParams){
    $scope.name = "SlidesController";
    $scope.params = $routeParams;
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
}]);