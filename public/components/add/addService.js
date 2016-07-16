angular.module('catalogApp')
    .factory('addService', ['$http', function($http) {
        return {
            addTask : function(task) {
                return $http.post('/api/articles', task)
                    .then(function(response){
                        return response.data;
                    },
                    function(response){
                        console.log('Server error');
                    });
            }
        };
    
}]);