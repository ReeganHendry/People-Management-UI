'use strict';

angular.
  module('peopleMgmtApp').
  config(['$urlRouterProvider' ,'$stateProvider',
    function config($urlRouterProvider, $stateProvider) {
 $urlRouterProvider.otherwise('/home');

      $stateProvider.
      state('home',{
          url :'/home',
        template: '<p> Welcome Home </p>'
        }).
        state('people',{
            url :'/home/people',
          template: '<person-list></person-list>'
          }).
        state('persondetails',{
            url : '/home/people/:voterId?{:action}',
            template: '<person-detail></person-detail>'
          }).
          state('createPerson',{
              url :'/home/person/create?{:action}',
            template: '<person-detail></person-detail>'
            })

    }
  ]);
