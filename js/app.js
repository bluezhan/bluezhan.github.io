var myblogApp = angular.module('myblog', [
    'ngRoute', 'myblogCtrls'
]);

// myblogApp.config(function($routeProvider) {
// myblogApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
myblogApp.config(['$routeProvider', '$locationProvider', '$sceProvider', function ($routeProvider, $locationProvider, $sceProvider) {
     $locationProvider.html5Mode(true);
    $routeProvider.when('/index', {
        templateUrl: '/js/template/index.html',
        controller: 'indexCtrl'
    }).when('/content/:id', {
        templateUrl: '/js/template/content.html',
        controller: 'contentCtrl'
    }).when('/about', {
        templateUrl: '/js/template/about.html',
        controller: 'aboutCtrl'
    }).otherwise({
        redirectTo: '/index'
    });

}]);
// 
// myblogApp.run(
//   [          '$rootScope', '$state', '$stateParams',
//     function ($rootScope,   $state,   $stateParams) {
//     // It's very handy to add references to $state and $stateParams to the $rootScope
//     // so that you can access them from any scope within your applications.For example,
//     // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
//     // to active whenever 'contacts.list' or one of its decendents is active.
//     $rootScope.$state = $state;
//     $rootScope.$stateParams = $stateParams;
//     } 
//   ]
// );

// myblogApp.config(function($stateProvider, $routeProvider) {
//     //
//     // For any unmatched url, redirect to /state1
//     $routeProvider.otherwise("/index");
//     //
//     // Now set up the states
//     $stateProvider
//         .state('index', {
//             url: "/index",
//             templateUrl: "js/template/index.html",
//             controller: 'indexCtrl'
//         })
//         .state('contentid', {
//             url: "/content/:id",
//             templateUrl: "js/template/content.html",
//             controller: 'contentCtrl'
//         })
//         .state('state2', {
//             url: "/state2",
//             templateUrl: "partials/state2.html"
//         })
//         .state('state2.list', {
//             url: "/list",
//             templateUrl: "partials/state2.list.html",
//             controller: function($scope) {
//                 $scope.things = ["A", "Set", "Of", "Things"];
//             }
//         });
// });

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
