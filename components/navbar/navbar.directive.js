'use strict';

angular.module('blogDoLeo')
    .directive('navbar', function () {
        return {
            templateUrl: 'components/navbar/templates/navbar.html',
            restrict: 'E',
            controller: 'publicNavbarCtrl'
        };
    });