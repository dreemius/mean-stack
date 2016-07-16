angular.module('catalogApp')
    .controller('fullListController', ['tasks', function(tasks) {
    
    var vm = this;
    vm.tasks = tasks; 
        
    vm.getStatus = function (status){
        return status ? "Выполнено" : "Не выполнено";
    }
    vm.getEmergency = function (emergency) {
        var result;
        if (emergency == "hi") {
            result = "Высокая";
        } else if(emergency == "middle") {
            result = "Средняя";
        } else {
            result = "Низкая";
        }
        return result;
    }
    
    vm.isDanger = function (emergency){
        return (emergency == "hi");
    }
    vm.isSuccess = function (emergency){
        return (emergency == "middle");
    }
    vm.isDefault = function (emergency){
        return (emergency == "low");
    }
}]);