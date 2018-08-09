
angular.module('ngShopApp')
    .controller('SearchCtrl', ['$scope', '$http', '_', '$location', 'commonService', function ($scope, $http, _, $location, commonService) {
        $scope.currentPage = 1;
        $scope.toltalPrice = 0;

        $scope.navigate = function () {
            commonService.setdata($scope.allData, $scope.toltalPrice);
            $location.path('/cart');
        };
        $scope.addClick = function (idx) {
            _.each($scope.allData, function (val, key) {
                if (val.id === idx) {
                    val.add = true;
                    val.quantity++;
                    $scope.toltalPrice += val.price;
                }
            });
        }
        $scope.onload = function () {
            $http.get('data.json').success(function (data) {
                $scope.allData = data;
                $scope.totalItems = data.length;
                $scope.itemsPerPage = 9;
            })
                .error(function (data) {
                    console.log("Error getting data from ");
                });
        }
        $scope.onload();
    }]);