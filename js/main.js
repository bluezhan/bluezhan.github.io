/*global require*/
'use strict';

require.config({
    paths: {
        jquery: './libs/jquery',
        angular: '../js/libs/angular'
    },
    shim: {
        angular: {
            exports: 'angular'
        }
    }
});

require(['jquery', 'angular'], function($, angular) {

    var h = $(window).height();

    $("header").height(h + 'px')

    var myblogApp = angular.module('myblog', [
        'ngRoute', 'myblogCtrls'
    ]);

    myblogApp.config(function($routeProvider) {
        $routeProvider.when('/index', {
            templateUrl: 'template/index.html',
            controller: 'indexCtrl'
        }).when('/content/:id', {
            templateUrl: 'template/content.html',
            controller: 'contentCtrl'
        }).otherwise({
            redirectTo: '/index'
        })
    });

    var bookStoreCtrls = angular.module('myblogCtrls', []);

    bookStoreCtrls.controller('indexCtrl', ['$scope',
        function($scope) {
            $scope.greeting = {
                text: 'Hello'
            };
        }
    ]);

    bookStoreCtrls.controller('contentCtrl', ['$scope',
        function($scope) {
            $scope.books = [{
                title: "《Ext江湖》",
                author: "大漠穷秋"
            }, {
                title: "《ActionScript游戏设计基础（第二版）》",
                author: "大漠穷秋"
            }, {
                title: "《用AngularJS开发下一代WEB应用》",
                author: "大漠穷秋"
            }]
        }
    ]);



});
