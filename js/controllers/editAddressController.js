angular.module('addressbook').controller('editAddressCtrl', function($scope, AddressBook, $http, $location, $timeout, $route, $routeParams, localStorageService) {

  // =========================================================================================================

  // show "Edit Address" title
  $scope.add = false;
  $scope.edit = true;

  // =========================================================================================================

  // get all address stored in local storage
  $scope.addresses = localStorageService.get('address');

  // =========================================================================================================

  // get all country name
  $scope.countryNames = AddressBook.getcountryNames();

  // =========================================================================================================

  // get the existing data from local storage.
  for(i=0;i<$scope.addresses.length;i++){
    if($routeParams.addressId === $scope.addresses[i].id.toString()){
      var E_address = $scope.addresses[i];
      $scope.addresses.splice(i,1);
      break;
    }
  }

  // =========================================================================================================

  // intialize scope variable with existing old data.
  $scope.f_name = E_address.name.firstname;
  $scope.l_name = E_address.name.lastname;
  $scope.p_number = E_address.phoneno;
  $scope.street = E_address.address.street;
  $scope.city = E_address.address.city;
  $scope.zipcode = E_address.address.zipcode;
  $scope.state = E_address.address.state;
  $scope.country = {};
  $scope.country.name = E_address.address.country;

  // =========================================================================================================

  // add new address to model
  $scope.addAddress = function(form){

      $scope.submitted = true;

      if(form.$valid) {

          // new address object
          var new_address = {};
          new_address.name = {};
          new_address.address = {};

          // saving form model data in new object
          new_address.id = E_address.id;

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

          $location.path('/');
      }

  }

  // =========================================================================================================

});