angular.module('catalogApp', ['ui.router']).
config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'partials/home/home.html'
        })
        
        .state('home.last', {
            url: '/last',
            templateUrl: 'partials/home/home-last.html',
            controllerAs: "ls",
            controller: 'taskController',
            resolve: {
                tasks: ['taskService', function (taskService) {
                    return taskService.getTasks("last");
                }]
            }
        })
        
        .state('home.urgent', {
            url: '/urgent',
            templateUrl: 'partials/home/home-urgent.html',
            controllerAs: "ug",
            controller: 'taskController',
            resolve: {
                tasks: ['taskService', function (taskService) {
                    return taskService.getTasks("urgent");
                }]
            }
        })
        
        .state('list', {
            url: '/list',
            params: { msg: null },
            views: {
                '': { 
                    templateUrl: 'partials/list/list.html',
                    controllerAs: "lst",
                    controller: 'listController'
                },
                'columnOne@list': { 
                    templateUrl: 'partials/list/full-list.html',
                    controllerAs: "fl",
                    controller: 'fullListController'
                },
                'columnTwo@list': { 
                    templateUrl: 'partials/list/statistics.html',
                    controllerAs: "stat",
                    controller: 'statisticController'
                }
            },
            resolve: {
                tasks: ['taskListService', function (taskListService) {
                    return taskListService.getTaskList();
                }]
            }
            
        })
    
        .state('add', {
            url: '/add',
            templateUrl: 'partials/add/add.html',
            controllerAs: "add",
            controller: 'addController'
        })
    
        .state('edit', {
            url: '/edit/:id',
            templateUrl: 'partials/edit/edit.html',
            controllerAs: "edit",
            controller: 'editController'
        });
        
});