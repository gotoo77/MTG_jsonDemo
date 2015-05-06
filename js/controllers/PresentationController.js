/**
 * Created by GDU on 24/04/2015.
 */

angular.module('myApp').controller('PresentationController', ['$scope', '$routeParams', function($scope,$routeParams){
//.controller('PresentationController', function($scope, $routeParams) {
    $scope.name = "PresentationController";
    $scope.params = $routeParams;

    $scope.myArray =
        [
            {title:"Khans of Tarkir", img:"./img/editions/ktk-c.gif" },
            {title:"Fate Reforged", img:"./img/editions/frf-c.gif" },
            {title:"Dragons of Tarkir", img:"./img/editions/dtk-c.gif" },
            {title:"Theros", img:"./img/editions/ths-c.gif" },
            {title:"Born of the Gods", img:"./img/editions/bng-c.gif" },
            {title:"Journey into Nyx", img:"./img/editions/jou-c.gif" },
            {title:"Return to Ravnica", img:"./img/editions/rtr-c.gif" },
            {title:"Gatecrash", img:"./img/editions/gtc-c.gif" },
            {title:"Dragon's Maze", img:"./img/editions/dgm-c.gif" }
        ];

    $scope.rowFilter = function (data) {
        var rows = [];
        var slices = [3,2,1,3];
        slices.forEach(function (s) {
            rows.push(data.splice(0,s));
        });
        //console.log(rows);
        return rows;
    };

    $scope.processArray = $scope.rowFilter($scope.myArray);

}]);
