angular.module('catalogApp')
    .controller('statisticController', ['tasks', function(tasks) {
    
    var vm = this;
    vm.tasks = tasks; 
    vm.totalCount = tasks.length;
    vm.completed = 0;
    vm.urgency = 0;
        
    angular.forEach(vm.tasks, function(item){
        if(item.completed) {vm.completed++}
        if(item.urgency == "hi") {vm.urgency++}
    })
}]);