angular.module('catalogApp')
    .factory('taskService', ['$http', function($http) {
        var ITEMS_COUNT = 5;
        return {
            getTasks : function(type) {
                return $http.get('/api/articles/' + type + '/' + ITEMS_COUNT)
                    .then(function(response){
                        return response.data;
                    },
                    function(response){
                        console.log('Server error');
                    });
            }
        };
    
}]);





