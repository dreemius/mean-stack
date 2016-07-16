angular.module('catalogApp')
    .controller('editController', ['$state','editService', function ($state, editService) {
    
    var vm = this;
    var taskId = null;
        
    editService.getTaskById($state.params.id).then(function(data){
            if(data.status) {
                taskId = data.task._id;
                vm.title = data.task.title,
                vm.description = data.task.description,
                vm.urgency = data.task.urgency,
                vm.completed = data.task.completed        
            }
        });
    
    vm.editTask = function(){
        var task = {
            id: taskId,
            title: vm.title,
            description: vm.description,
            urgency: vm.urgency ? vm.urgency : "low",
            completed: vm.completed ? true : false
        }
        editService.editTask(task).then(function(data){
            if(data.status) {
             $state.go("list", {msg: "Задача отредактирована"});    
            }
        });
    }
    
    vm.deleteTask = function(){
        var task = {
            id: taskId,
            title: vm.title,
            description: vm.description,
            urgency: vm.urgency ? vm.urgency : "low",
            completed: vm.completed ? true : false
        }
        editService.deleteTask(taskId).then(function(data){
            if(data.status) {
             $state.go("list", {msg: "Задача была удалена"});    
            }
        });
    }
     
}]);