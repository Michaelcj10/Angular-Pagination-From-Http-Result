myApp.factory("factory", ['$http', function($http) {
    var factory = {};

      factory.getRecords = function(tamId ) {
    
        var _url = "json/olympicJson.json";
   
        return $http({
            method: 'GET',
            url: _url
        });
    };

       return factory;
}]);