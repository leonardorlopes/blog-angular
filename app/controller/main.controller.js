'use strict';

angular.module('blogDoLeo')
    .controller('mainCtrl', ['$scope', 'Articles', 'Utils', 'CONFIG',
        function ($scope, Articles, Utils, CONFIG) {
            var articles;
            $scope.blogName = CONFIG.BLOG_NAME;
            
            $scope.sortDir = 'Data - Mais recentes';
           
            $scope.sortByDate = function (property, dir) {
                if (0 === dir) {
                    $scope.sortDir = 'Data - Mais antigas';
                    $scope.articles = Utils.groupArticles(articles.sort(Utils.compareDesc), 3);
                    return undefined;
                }
                $scope.sortDir = 'Data - Mais recentes';
                $scope.articles = Utils.groupArticles(articles.sort(Utils.compare), 3);
            };
            
            $scope.sortByTitle = function (property, dir) {
                if (0 === dir) {
                    $scope.sortDir = 'Titulo  A-Z';
                    $scope.articles = Utils.groupArticles(articles.sort(Utils.compareByTitle), 3);
                    return undefined;
                }
                $scope.sortDir = 'Titulo  Z-A';
                $scope.articles = Utils.groupArticles(articles.sort(Utils.compareByTitleDesc), 3);
            };

            $scope.loadData = function () {
                articles = Articles.getList();
                if (typeof articles.then === 'function') {
                    return articles.then(function (data) {
                        articles = data;
                        $scope.articles = Utils.groupArticles(data.sort(Utils.compare), 3);
                        return data;
                    });
                }
                else {
                    $scope.articles = Utils.groupArticles(articles.sort(Utils.compare), 3);
                    return articles;
                }
            };


        }]);