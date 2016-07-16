angular.module('catalogApp')
    .controller('listController', ['$scope', '$timeout', '$stateParams', function($scope, $timeout, $stateParams) {
    
    var vm = this;
    vm.msg = null;
        
    if($stateParams.msg) {
        vm.msg = $stateParams.msg;
    };
        
    $scope.$watch('lst.msg', function(newVal){
        if(newVal && newVal.length) {
            $timeout(function(){
                vm.msg = null;    
            }, 4000);
        }
    });
  
}]);