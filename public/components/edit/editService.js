angular.module('catalogApp')
    .factory('editService', ['$http', function($http) {
        return {
            getTaskById : function(taskId) {
                return $http.get('/api/articles/' + taskId)
                    .then(function(response){
                        return response.data;
                    },
                    function(response){
                        console.log('Server error');
                    });
            },
            editTask : function(task) {
                return $http.put('/api/articles/' + task.id, task)
                    .then(function(response){
                        return response.data;
                    },
                    function(response){
                        console.log('Server error');
                    });
            },
            deleteTask : function(taskId) {
                return $http.delete('/api/articles/' + taskId)
                    .then(function(response){
                        return response.data;
                    },
                    function(response){
                        console.log('Server error');
                    });
            }
        };
    
}]);