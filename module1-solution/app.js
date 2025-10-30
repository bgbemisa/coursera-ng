(function ()
{

  'use strict';

  angular
  .module('LunchCheck', [])
  .controller('LunchCheckController');
  Controller.$inject = ['$scope'];
  function Controller($scope)
  {

    $scope.LunchItems = "";
    $scope.Message = "";
    
    $scope.ProcessItems = function()
    {
      const ItemArray = LunchItems.split(",");

      if(ItemArray.length == 0)
      {
        $scope.Message = "Please enter data first";
      }

      else if(ItemArray.length<=3)
      {
        $scope.Message = "Enjoy!"; 
      }

      else
      {
        $scope.Message = "Too much!";
      }

    };


  };
  


}
)
();