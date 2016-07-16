angular.module('catalogApp')
    .factory('taskListService', ['$http',function($http) {
    
        return {
            getTaskList : function() {
                return $http.get('/api/articles')
                    .then(function(response){
                        return response.data;
                    },
                    function(response){
                        console.log('Same error');
                    });
            }
        };
    
}]);





