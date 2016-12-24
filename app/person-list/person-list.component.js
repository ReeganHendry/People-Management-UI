'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('personList').
  component('personList', {
    templateUrl: 'person-list/person-list.template.html',
    controller: ['$http','personListService', function PersonListController($http,personListService) {

      var self = this;

      self.searchPeople = function(){
        personListService.getPeopleBasedOnInputs(self.person).then(function(response){
          console.log("---success----searchPeople--->");
          self.people = response.data;
        },
        function(error){
          console.log("---error----searchPeople--->"+error);
        });
      };

    }]
  });
