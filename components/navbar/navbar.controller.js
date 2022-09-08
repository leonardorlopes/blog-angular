'use strict';

angular.module('blogDoLeo')
    .controller('publicNavbarCtrl', ['$scope', '$window', 'CONFIG',
        function ($scope, $window, CONFIG) {
            $scope.blogName = CONFIG.BLOG_NAME;          
        }]);

