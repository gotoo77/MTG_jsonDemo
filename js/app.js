/**
 * Created by GDU on 24/04/2015.
 */
var myApp = angular.module('myApp', ['ngRoute','ui.bootstrap']);
//var myApp = angular.module('myApp', []);





myApp.controller('MainController', function($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
})



    .config(function($routeProvider, $locationProvider, $httpProvider) {

        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

        $routeProvider
            .when('/Book/:bookId', {
                templateUrl: 'html/views/book.html',
                controller: 'BookController'/*,
                resolve: {
                    // I will cause a 1 second delay
                    delay: function($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 1000);
                        return delay.promise;
                    }
                }*/
            })
            .when('/Book/:bookId/ch/:chapterId', {
                templateUrl: 'html/views/chapter.html',
                controller: 'ChapterController'
            })
            .when('/home', {
                templateUrl: 'html/views/Home.html',
                controller: 'PresentationController'
            })
            .when('/Dongle/:myDongle', {
                templateUrl: 'html/views/Dongle.html',
                controller: 'DongleController'
            })
            .when('/Extension/:myExtension', {
                templateUrl: 'html/views/Extension.html',
                controller: 'ExtensionController'
            })
            .when('/MasterDetail/:myId', {
                templateUrl: 'html/views/MasterDetailsDemo.html',
                controller: 'MasterDetailCtrl'
            })
            .when('/Extension/:myExtension/Card/:myCard', {
                templateUrl: 'html/views/Card.html',
                controller: 'CardController'
            })
            .when('/definitions/:myDef', {
                    templateUrl: 'html/views/Definitions.html',
                    controller: 'DefinitionsCtrl'
            })
            .otherwise({redirectTo: '/home'});
        // configure html5 to get links working on jsfiddle
        $locationProvider.html5Mode(true);
    });


myApp.filter("col", function() {
    return function(value) {
        return ['col-xs-','col-sm-', 'col-md-'].map( function (c)
        { return c + value} ).join(' ');
    }
});
