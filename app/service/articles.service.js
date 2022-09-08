'use strict';

angular.module('blogDoLeo')
    .factory('Articles', ['$resource', 'localStorageService', 'CONFIG', '$document', '$window',
        function ($resource, localStorageService, CONFIG, $document, $window) {

            var resource = $resource(CONFIG.BASE_HREF + '/data/articles.json', {}, {
                get: { method: 'GET', isArray: true }
            });
            
            resource.getArticlesFromLocalStore = function () {
                return localStorageService.get(CONFIG.ARTICLES_STORE);
            };
            
            resource.setArticlesToLocalStore = function (articles) {
                return localStorageService.set(CONFIG.ARTICLES_STORE, articles);
            };
           
            resource.getList = function () {
                
                var storedArticles = this.getArticlesFromLocalStore(),
                    oThis = this;
                
                if (!storedArticles) {
                    return this.get().$promise.then(function (articles) {
                        oThis.setArticlesToLocalStore(articles);
                        return articles;
                    });
                }

                return storedArticles;
            };           
            
            return resource;
        }]);
