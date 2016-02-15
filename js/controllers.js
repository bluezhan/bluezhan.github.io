    var bookStoreCtrls = angular.module('myblogCtrls', []);




    bookStoreCtrls.controller('indexCtrl', ['$scope', '$location',
        function($scope, $location) {


            $scope.greeting = {
                text: 'Hello'
            };

            $scope.lists = [{
                time: "<p>01<span>㊊</span>~~<span></span></p>/2016",
                cells: [{
                    title: "HTML5 Web 存储",
                    tags: ["HTML5", "Javascript"],
                    summary: "<p>在客户端存储数据                    HTML5 提供了两种在客户端存储数据的新方法：                    localStorage - 没有时间限制的数据存储                    sessionStorage - 针对一个 session 的数据存储                    之前， 这些都是由 cookie 完成的。 但是 cookie 不适合大量数据的存储， 因为它们由每个对服务器的请求来传递， 这使得 cookie 速度很慢而且效率也不高。                    在 HTML5 中， 数据不是由每个服务器请求传递的， 而是只有在请求时使用数据。 它使在不影响网站性能的情况下存储大量数据成为可能。                    对于不同的网站， 数据存储于不同的区域， 并且一个网站只能访问其自身的数据。                    HTML5 使用 JavaScript 来存储和访问数据。</p>"
                }, {
                    title: "JavaScript的语言设计有哪些缺陷？",
                    tags: ["Javascript", "Webapp"],
                    summary: "<p>你们可能读了 《ECMAScript Specification》，以为闭包必然持有外部所有变量的引用，这种错误的认识还挺普遍的，我在这个回答里也澄清过了，要清楚Spec只是描述语义，而非具体实现细节：和 C/C++ 相比，JavaScript 的性能差在哪里 ？ 不过我要提醒大家，v8等引擎，即使ES5下在GC实现上也有Bug：An interesting kind of JavaScript memory leak两个函数 Share 了同一个 Env 对象。颇为讽刺的是，作者将此发表到 HackerNews 上竟然有一群无知的JS程序员认为这是该有的行为，然后还引用《ES Spec》之乎者也起来。不知道这Bug现在修复好没有，不过这也属于解释器实现的问题，并非语言自身缺陷。</p>"
                }, {
                    title: "学会说人话！8个文案改进方法帮你快速提高用户体验",
                    tags: ["Javascript", "Webapp", "浏览器"]
                }, {
                    title: "好好谈谈正则表达式",
                    tags: ["Javascript", "Webapp"]
                }, {
                    title: "我是这样就使用了TypeScript",
                    tags: ["Javascript", "Webapp"]
                }, {
                    title: "JavaScript 资源大全中文版",
                    tags: ["Javascript", "整理"]
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
            }, {
                time: "<p>01<span>㊊</span>~04<span>㊊</span></p>/2015",
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
            }, {
                time: "<p>全<span>㊊</span></p>/2014",
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
                }, {
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
                }, {
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
                }, {
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
            }];

            // var h = $(window).height();
            // $("header,header .box").height(h + 'px')

            // $(window).resize(function() {
            //     var h = $(window).height();
            //     $("header,header .box").height(h + 'px')
            // });

            $("#loading").hide()
            $('body').removeClass("page-content")

            var $document = $(document);

            $document.ready(function() {

                var $postContent = $(".post-content");
                // $postContent.fitVids();

                // $(".scroll-down").arctic_scroll();

                $(".menu-button, .nav-cover, .nav-close").on("click", function(e) {
                    e.preventDefault();
                    $("body").toggleClass("nav-opened nav-closed");
                });

            });

            $scope.$watch('locationPath', function(path) {
                $location.path(path);
            });

            $scope.$watch('$location.path()', function(path) {
                $scope.locationPath = path;
            });


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

            $scope.title = $routeParams.id;

            $('body').addClass("page-content")

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
