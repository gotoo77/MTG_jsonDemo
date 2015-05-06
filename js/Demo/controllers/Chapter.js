/**
 * Created by GDU on 24/04/2015.
 */
angular.module('myApp').controller('ChapterController', ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.name = "ChapterController";
    $scope.params = $routeParams;

}]);