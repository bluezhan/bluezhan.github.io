    var bookStoreCtrls = angular.module('myblogCtrls', []);

    bookStoreCtrls.controller('indexCtrl', ['$scope',
        function($scope) {
            $scope.greeting = {
                text: 'Hello'
            };

            var h = $(window).height();
            $("header,header .box").height(h + 'px')

            $(window).resize(function() {
                var h = $(window).height();
                $("header,header .box").height(h + 'px')
            });

        }

    ]);

    bookStoreCtrls.controller('contentCtrl', ['$scope','$routeParams','$location',
        function($scope, $routeParams, $location) {



             

             console.log($location)
             console.log($routeParams)


        }


    ]);

    bookStoreCtrls.controller('aboutCtrl', ['$scope','$routeParams','$location',
        function($scope, $routeParams, $location) {

              console.log($location)
              console.log($routeParams)


        }


    ]);

    /**
     * 这里接着往下写，如果控制器的数量非常多，需要分给多个开发者，可以借助于grunt来合并代码
     */
