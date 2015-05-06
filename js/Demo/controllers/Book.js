/**
 * Created by GDU on 24/04/2015.
 */
angular.module('myApp').controller('BookController', ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.name = "BookController";
    $scope.params = $routeParams;

}]);