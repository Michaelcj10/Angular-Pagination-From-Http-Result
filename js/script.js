myApp.controller('MyController', function($scope, factory) {

  $scope.currentPage = 1;
  $scope.pageSize = 10;


    angular.element(document).ready(function () {

           factory.getRecords().success(function(response) {
               $scope.records = response;
           });
    });
});
