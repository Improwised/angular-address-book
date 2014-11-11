angular.module('addressbook').controller('addressBookCtrl', function($scope, AddressBook, $http, $location, $route, $timeout, localStorageService) {

  // =========================================================================================================

  // global variables
  $scope.addresses = [];

  $scope.countryNames = [];


  // =========================================================================================================

  // get the address data from local storage
  $scope.addresses = localStorageService.get('address');


  // if "$scope.addresses" is empty or null then get the data from the service "AddressBook"
  if( $scope.addresses == null || $scope.addresses == ''){
    $scope.addresses = AddressBook.getallAddress();
    localStorageService.set('address' , $scope.addresses);
  }


  // =========================================================================================================

  // remove the address from the addressbook
  $scope.deleteAddress = function(address,$index){
    $scope.addresses.splice($index,1);
    localStorageService.set('address' ,$scope.addresses);
    $scope.sucessAddressDelete = true;
    $scope.doneAddressDelete();
  }

  // =========================================================================================================

  $scope.editAddress=function(id){
       $location.path("/edit_address/"+id);
    }

  // =========================================================================================================

  // notification of added New Address
  $scope.sucessAddressDelete = false;

  $scope.doneAddressDelete = function(){
      $timeout(function () { $scope.sucessAddressDelete = false; }, 3000);
  };

  // =========================================================================================================

});