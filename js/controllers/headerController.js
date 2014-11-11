angular.module('addressbook').controller('HeaderController', function($scope, $location) {

  // =========================================================================================================

  $scope.isActive = function (viewLocation) {
    var active = (viewLocation === $location.path());
    return active;
  };


  function updateTime(){
      var currentTime = new Date()
      var hours = currentTime.getHours()
      var minutes = currentTime.getMinutes()
      var seconds = currentTime.getSeconds()
      if (minutes < 10){
          minutes = "0" + minutes
      }
      if (seconds < 10){
          seconds = "0" + seconds
      }
      var t_str = hours + ":" + minutes + ":" + seconds + " ";
      if(hours > 11){
          t_str += "PM";
      } else {
          t_str += "AM";
      }
      document.getElementById('time_span').innerHTML = t_str;
  }
  setInterval(updateTime);


  // =========================================================================================================

});