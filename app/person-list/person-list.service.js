'use strict';

var personListModule = angular.module('personList');

personListModule.factory('personListService',['$http','$q',function($http,$q){
return{

  getPeopleBasedOnInputs : function(person){
    console.log("---getPeopleBasedOnInputs------->");
    var deferred = $q.defer();
    $http({
        method: 'POST',
        url: 'http://localhost:8080/person/search',
        data:person
      }).then(function successCallback(response) {
            deferred.resolve(response);
      }, function errorCallback(response) {
            deferred.reject(response);
      });
    return deferred.promise;
  },

  getPersonByVoterId : function(voterId){
    var deferred = $q.defer();
    $http.get('http://localhost:8080/person/'+voterId).
      then(function successCallback(response) {
            deferred.resolve(response);
      }, function errorCallback(response) {
            deferred.reject(response);
      });
    return deferred.promise;
  },

  updatePerson : function(person){
    var deferred = $q.defer();
    $http.put('http://localhost:8080/person/',person).
      then(function(response) {
        deferred.resolve(response);
      }, function errorCallback(response) {
            deferred.reject(response);
      });
      return deferred.promise;
  },

  createPerson : function(person){
    var deferred = $q.defer();
    $http.post('http://localhost:8080/person/',person).
      then(function(response) {
        deferred.resolve(response);
      }, function errorCallback(response) {
            deferred.reject(response);
      });
      return deferred.promise;
  }

};

}])
