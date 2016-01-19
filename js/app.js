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



 // 
 // # blog 1.0 
 // Tag: Javascript ES2015 CSS HTML5 Webapp 浏览器 数据可视化 UI 交互 产品 书籍 畅谈杂事 Node.js CSS3.0 前端杂谈 优化优化 Hybrid-app 
 // 
 // about 
 // content 
 // idnex
 // 
 // 添加 content -> 文章
 // 添加 content -> 文章 -> header menu
 // 添加 about
 // 添加 动画
 // 打包项目
 // 
 //  # blog 2.0 
 // 
 // 
 // 
 // 
 // 
 // 
 // 
 // 
 // 
 // 
 // 
 // 
 // 
 // 
 // 