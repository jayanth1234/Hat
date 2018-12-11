// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$http' , function ($scope, $http) {
    
    $scope.selectedCity;

    $scope.cities = ["BANGALORE", "MUMBAI", "HYDERABAD", "KOLKATA", "CHENNAI"]

    $scope.changedValue = (city) => {
        $scope.selectedCity = city;

        $http.get("https://vast-shore-74260.herokuapp.com/banks?city=" + $scope.selectedCity)
        .then(res => {
            $scope.bankName = res.data
        })
    }

}]);



