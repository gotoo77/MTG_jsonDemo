/**
 * Created by T_GautierD1 on 24/04/2015.
 */
angular.module('myApp').controller('HeaderController', ['$scope', '$location', '$routeParams', function($scope,$location,$routeParams){

    $scope.name = "HeaderController";
    $scope.params = $routeParams;
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
}]);