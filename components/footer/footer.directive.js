'use strict';

angular.module('blogDoLeo')
  .directive('footer', function () {
    return {
      templateUrl: 'components/footer/templates/footer.html',
      restrict: 'E',
      link: function (scope, element) {
        element.addClass('footer');
      },
      controller: 'publicFooterCtrl'
    };
  });
