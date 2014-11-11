angular.module("addressbook")
    .config(['$routeProvider',function($routeProvider){

        $routeProvider.when('/',{templateUrl:'partials/dashboard.html', controller: 'addressBookCtrl'})

        $routeProvider.when('/add_address',{templateUrl:'partials/add_address.html', controller: 'addNewAddressCtrl'})

        $routeProvider.when('/edit_address/:addressId',{templateUrl:'partials/add_address.html', controller: 'editAddressCtrl'})

        $routeProvider.otherwise({redirectTo :'/'})
    }]);