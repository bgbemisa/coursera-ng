(function ()
{

  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', Controller);
  
  Controller.$inject = [$scope];

  function Controller($scope)
  {

    $scope.LunchItems = "";
    $scope.Message = "";

    $scope.ProcessItems = function()
    {

      const ItemArray = $scope.LunchItems.split(",");

      if($scope.LunchItems == "")
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