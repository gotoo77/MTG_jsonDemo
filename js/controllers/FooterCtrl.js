/**
 * Created by T_GautierD1 on 24/04/2015.
 */
angular.module('myApp').controller('FooterController', ['$scope', '$location', '$routeParams', function($scope,$location,$routeParams){

    $scope.name = "FooterController";
    $scope.params = $routeParams;
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
}]);