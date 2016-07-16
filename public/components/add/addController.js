angular.module('catalogApp')
    .controller('addController', ['$state','addService', function ($state, addService) {
    
    var vm = this;
    
    vm.addTask = function(){
        var task = {
            title: vm.title,
            description: vm.description,
            urgency: vm.urgency ? vm.urgency : "low",
            completed: vm.completed ? true : false
        }
        console.log(task);
        addService.addTask(task).then(function(data){
            if(data.status) {
             $state.go("list", {msg: "Задача добавлена"});    
            }
        })
    }
    
     
}]);