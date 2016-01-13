// core directive play

//app define
var app = angular.module('directivePlayApp', ['ui.router']);

// ROUTE CONFIGS
app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
    //default route
    $urlRouterProvider.otherwise('/home');

    //home state
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'partials/partial-home.html',
        controller: 'mainController'
    });
});

// CONTROLLERS
app.controller('mainController', ['$scope', '$http', function($scope, $http){
    //car data
    $scope.cars = [
        {
            model:'Toyota Corolla',
            price: 12000,
            hp: 102,
            tq: 101
        },
        {
            model:'Nissan 240SX',
            price: 2900,
            hp: 140,
            tq: 152
        },
        {
            model:'Toyota Matrix',
            price: 15800,
            hp: 130,
            tq: 125
        },
        {
            model: 'Toyota Corolla',
            price: 16000,
            hp: 126,
            tq: 122
        },
        {
            model: 'Toyota Pickup',
            price: 12000,
            hp: 116,
            tq: 140
        }
    ];
}]);

// DIRECTIVES
app.directive('ngSparkline', function() {
    return {
        restrict: 'AECM',
        require: '^ngModel',
        scope: {},              //isolated scope so each directive operates independently
        templateUrl: 'templates/ng-sparkline-template.html',
        controller: ['$scope', '$http', function($scope, $http){
            $scope.getTemp = function(city){
                $http({
                    method:'JSONP',
                    url: url + city,
                }).success(function(data){
                    var weather =[];
                    angular.forEach(data.list, function(value){
                        weather.push(value);
                    });
                });

                $scope.weather = weather;
            };
        }],
        //link: function(scope iElement, iAttrs, ctrl) {
        //    scope.getTemp(iAttrs.ngCity);
        //}

    }
});
