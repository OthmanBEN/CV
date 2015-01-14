
'use strict';

/**
 * @ngdoc function
 * @name cvApp.service:jsonFactory
 * @description
 * # jsonFactory
 * Define Factory for loading json file
 */
angular.module('cvApp')
.factory('jsonFactory', function($q, $timeout, $http) {
    var JsonFactory = {
        fetch: function(jsonFile) {
            
            var deferred = $q.defer();

                $http.get(jsonFile).success(function(data) {
                    deferred.resolve(data);
                });

            return deferred.promise;
        }
    };

    return JsonFactory;
});