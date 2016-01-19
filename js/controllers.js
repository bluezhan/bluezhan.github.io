    var bookStoreCtrls = angular.module('myblogCtrls', []);




    bookStoreCtrls.controller('indexCtrl', ['$scope',
        function($scope) {


            $scope.greeting = {
                text: 'Hello'
            };

            $scope.lists = [{
                time: "<p>01<span>㊊</span>~~<span></span></p>/2016",
                cells: [{
                    title: "JavaScript的语言设计有哪些缺陷？",
                    tags: ["Javascript", "Webapp"]
                }, {
                    title: "学会说人话！8个文案改进方法帮你快速提高用户体验",
                    tags: ["Javascript", "Webapp", "浏览器"]
                }, {
                    title: "好好谈谈正则表达式",
                    tags: ["Javascript", "Webapp"]
                }, {
                    title: "我是这样就使用了TypeScript",
                    tags: ["Javascript", "Webapp"]
                }]
            }, {
                time: "<p>12<span>㊊</span></p>/2015",
                cells: [{
                    title: "移动前端不得不了解的html5的head头标签",
                    tags: ["Javascript", "Webapp", "浏览器"]
                }, {
                    title: "H5操作探险",
                    tags: ["Javascript", "Webapp", "浏览器"]
                }, {
                    title: "浓缩的精华！从零开始带你认识最新的图片格式webp",
                    tags: ["Javascript", "Webapp", "浏览器"]
                }, {
                    title: "注意了，select标签是有生命周期的",
                    tags: ["Javascript", "HTML", "浏览器"]
                }, {
                    title: "HTMl5的存储方式sessionStorage和localStorage详解",
                    tags: ["Javascript", "Webapp", "浏览器"]
                }, {
                    title: "HTMl5的离线缓存(manifest)处理方式",
                    tags: ["Javascript", "Webapp", "浏览器"]
                }, {
                    title: "百度，淘宝，腾讯三大巨头HTML页面规范分解",
                    tags: ["Javascript", "Webapp", "浏览器"]
                }, {
                    title: "移动端百度，淘宝，腾讯，搜狐HTML页面规范分解",
                    tags: ["Javascript", "Webapp", "浏览器"]
                }, {
                    title: "CSS关于元素垂直居中的问题",
                    tags: ["Javascript", "Webapp", "浏览器"]
                }, {
                    title: "解决Chrome谷歌浏览器不支持CSS设置小于12px的文字",
                    tags: ["Javascript", "Webapp", "浏览器"]
                }, {
                    title: "10个CSS简写/优化技巧",
                    tags: ["Javascript", "Webapp", "浏览器"]
                }, ]
            }, {
                time: "<p>09<span>㊊</span>~11<span>㊊</span></p>/2015",
                cells: [{
                    title: "CSS兼容性详解",
                    tags: ["Javascript", "CSS"]
                }, {
                    title: "优化网站的访问速度",
                    tags: ["Javascript", "Webapp", "浏览器"]
                }, {
                    title: "从交互到产品",
                    tags: ["Javascript", "Webapp", "浏览器"]
                }, {
                    title: "谈谈webAPP单页面框架",
                    tags: ["Javascript", "Webapp", "浏览器"]
                }, {
                    title: "D3C3-数据可视化",
                    tags: ["Javascript", "Webapp", "浏览器"]
                }, {
                    title: "无线性能优化：FPS 测试",
                    tags: ["Javascript", "Webapp", "优化"]
                }, {
                    title: "web前端开发规范和整理",
                    tags: ["Javascript", "Webapp"]
                }]
            }, {
                time: "<p>05<span>㊊</span>~08<span>㊊</span></p>/2015",
                cells: [{
                    title: "http 304",
                    tags: ["Javascript", "浏览器"]
                }, {
                    title: "UI界面尺寸",
                    tags: ["UI"]
                }, {
                    title: "从交互到产品",
                    tags: ["产品", "交互"]
                }, {
                    title: "H5 App太强！要降薪的恐怕不只是iOS程序员",
                    tags: ["Javascript", "Webapp", "H5"]
                }, {
                    title: "D3C3-数据可视化",
                    tags: ["Javascript", "Webapp", "数据可视化"]
                }, {
                    title: "svg canvas 的样式",
                    tags: ["Javascript", "Webapp", "H5"]
                }, {
                    title: "CSS的尺寸单位(px,rem,vm)",
                    tags: ["CSS"]
                }]
            }]

            var h = $(window).height();
            $("header,header .box").height(h + 'px')

            $(window).resize(function() {
                var h = $(window).height();
                $("header,header .box").height(h + 'px')
            });

            $("#loading").hide()

        }

    ]).filter(
        'to_trusted', ['$sce', function($sce) {
            return function(text) {
                return $sce.trustAsHtml(text);
            }
        }]
    );

    bookStoreCtrls.controller('contentCtrl', ['$scope', '$routeParams', '$location',
        function($scope, $routeParams, $location) {





            console.log($location)
            console.log($routeParams)


        }


    ]);

    bookStoreCtrls.controller('aboutCtrl', ['$scope', '$routeParams', '$location',
        function($scope, $routeParams, $location) {

            console.log($location)
            console.log($routeParams)


        }


    ]);

    /**
     * 这里接着往下写，如果控制器的数量非常多，需要分给多个开发者，可以借助于grunt来合并代码
     */
