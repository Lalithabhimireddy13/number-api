const app = angular.module('numberApp', []);

app.controller('MainController', ['$scope', '$http', function($scope, $http) {
    $scope.fetchData = function(endpoint) {
        let url = `http://localhost:3001${endpoint}?`; // Updated port to 3000

        if (endpoint === '/f') {
            url += `n=${$scope.end}`;
        } else if (endpoint === '/s' || endpoint === '/a' || endpoint === '/sq') {
            url += `numbers=${$scope.numbers}`;
        } else {
            url += `start=${$scope.start}&end=${$scope.end}`;
        }

        $http.get(url).then(function(response) {
            $scope.result = response.data;
        }, function(error) {
            $scope.result = { error: error.statusText };
        });
    };
}]);
