'use strict';

/**
 * @ngInject
 */
function routerConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('humanLibrary', {
    url: '/',
    controller: 'LibraryController',
    controllerAs: 'vm',
    templateUrl: '/_templates/layout.html'
  });

}

module.exports = routerConfig;
