'use strict';

angular.module('blogDoLeo')
    .controller('publicFooterCtrl', ['$scope', 'CONFIG',
        function ($scope, CONFIG) {
            $scope.blogName = CONFIG.BLOG_NAME;
        }]);