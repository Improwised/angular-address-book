angular.module('addressbook').controller('addNewAddressCtrl', function($scope, AddressBook, $routeParams, $http, $timeout, $location, $route, localStorageService) {

  // =========================================================================================================

  // show "Add New Address" title
  $scope.add = true;
  $scope.edit = false;

  // =========================================================================================================

  // get all address stored in local storage
  $scope.addresses = localStorageService.get('address');

  // =========================================================================================================

  // get all country name
  $scope.countryNames = AddressBook.getcountryNames();

  // =========================================================================================================

  // notification of added New Address
  $scope.sucessAddressAdd = false;

  $scope.doneAddressAdd = function(){
      $timeout(function () { $scope.sucessAddressAdd = false; }, 4000);
  };

  // =========================================================================================================

  // add new address to model
  $scope.addAddress = function(form){

      $scope.submitted = true;

      if(form.$valid) {

          // array of all addresses id
          var addresses_id = [];


          // pushed "id" into address_id
          for(i=0;i<$scope.addresses.length;i++){
            addresses_id.push($scope.addresses[i].id);
          }


          // find the highest value of "id"
          var max = Math.max.apply( Math, addresses_id );


          // new unique id for new address
          $scope.id = max + 1;


          // new address object
          var new_address = {};
          new_address.name = {};
          new_address.address = {};


          // saving form model data in new object
          new_address.id = $scope.id;

          new_address.name.firstname = $scope.f_name;
          new_address.name.lastname = $scope.l_name;

          new_address.phoneno = $scope.p_number;

          new_address.address.street = $scope.street;
          new_address.address.city = $scope.city;
          new_address.address.zipcode = $scope.zipcode;
          new_address.address.state = $scope.state;
          new_address.address.country = $scope.country.name;


          // pushed new address into array of addresses( $scope.addresses )
          $scope.addresses.push(new_address);

          // update localstorage 'address'
          localStorageService.set('address' ,$scope.addresses);

          $scope.submitted = false;

          // clear input field
          $scope.f_name = '';
          $scope.l_name = '';
          $scope.p_number = '';
          $scope.street = '';
          $scope.city = '';
          $scope.zipcode = '';
          $scope.state = '';
          $scope.country = '';

          // $location.path('/');

          $scope.sucessAddressAdd = true;
          $scope.doneAddressAdd();

      }

  }

  // =========================================================================================================


});