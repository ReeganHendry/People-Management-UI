'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('personDetail').
  component('personDetail', {
    templateUrl: 'person-detail/person-detail.template.html',
    controller: ['$http', '$stateParams','personListService',
      function PersonDetailController($http, $stateParams, personListService) {
        var self = this;
        var voterId = $stateParams.voterId;
        self.action = $stateParams.action;
        self.personUpdateStatus = 0;

        personListService.getPersonByVoterId(voterId).then(function(response){
          console.log("---success----getPersonByVoterId--->");
          self.person = response.data;
        },
        function(error){
          console.log("---error----getPersonByVoterId--->"+error);
        });

        self.updatePerson = function(){
          personListService.updatePerson(self.person).then(function(response){
            console.log("---success----updatePerson--->");
            self.person = response.data;
            self.personUpdateStatus = response.status;
            console.log("---success----updatePerson----response.data-->"+response.data);
            console.log("---success----updatePerson----response---status---->"+response.status);
          },
          function(error){
            console.log("---error----updatePerson--->"+error);
          });
        }

        self.createPerson = function(){

          personListService.createPerson(self.person).then(function(response){
            console.log("---success----createPerson--->");
            self.person = response.data;
            self.personUpdateStatus = response.status;
          },
          function(error){
            console.log("---error----createPerson--->"+error);
          });
        }

      }
    ]
  });
