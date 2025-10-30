(function ()
{

  'use strict';

  angular.module('NgApp', [])
  .controller('NgController', function ($scope)
  {

    $scope.Name = "";
    $scope.TotalValue = 0;

    $scope.ProcessNumericValue = function ()
    {
      let TotalValue = 0;
      for (let i = 0; i < ($scope.Name).length; i++)
      {
        TotalValue += ($scope.Name).charCodeAt(i);
      };
      $scope.TotalValue = TotalValue;
    };

  }
  );


}
)
();