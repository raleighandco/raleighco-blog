(function () {
    'use strict';
    angular.module('Home', []);
    angular.module('About', []);
    angular.module('Blog', []);
    angular.module('Contact', []);
    angular.module('raleighcoBlog', [
        'home',
        'about',
        'contact',
        'blog',
        'ui.bootstrap', 
        'ui.utils', 
        'ui.router', 
        'ngAnimate',
        'firebase'
    ]);

    angular.module('raleighcoBlog').config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: '/states/home/home.html',
            controller: 'Home'
        })
        .state('about', {
            url: "/about",
            templateUrl: '/states/about/about.html',
            controller: 'About'
        })
        .state('contact', {
            url: "/contact",
            templateUrl: '/states/contact/contact.html',
            controller: 'Contact'
        })
        .state('blog', {
            url: "/blog",
            templateUrl: '/states/blog/blog.html',
            controller: 'Blog'
        });

        /* Add New States Above */
        $urlRouterProvider.otherwise('/home');

    });

    angular.module('raleighcoBlog').run(function ($rootScope) {

        $rootScope.safeApply = function (fn) {
            var phase = $rootScope.$$phase;
            if (phase === '$apply' || phase === '$digest') {
                if (fn && (typeof (fn) === 'function')) {
                    fn();
                }
            } else {
                this.$apply(fn);
            }
        };

    });
}());