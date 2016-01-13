var myblogApp = angular.module('myblog', [
        'ngRoute', 'myblogCtrls'
    ]);

    myblogApp.config(function($routeProvider) {
        $routeProvider.when('/index', {
            templateUrl: 'js/template/index.html',
            controller: 'indexCtrl'
        }).when('/content/:id', {
            templateUrl: 'js/template/content.html',
            controller: 'contentCtrl'
        }).when('/about', {
            templateUrl: 'js/template/about.html',
            controller: 'aboutCtrl'
        }).otherwise({
            redirectTo: '/index'
        })
    });