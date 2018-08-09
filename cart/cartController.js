angular.module('ngShopApp').controller('CartCtrl', ['$scope', '$location', 'commonService', '_', function ($scope, $location, commonService, _) {
    $scope.name = "CartController";
    $scope.message = "";
    $scope.shop = "Shop";
    $scope.navigate = function () {
        $location.path('/search');
    };
    $scope.data = commonService.getdata();
    console.log($scope.data);
    $scope.priceCal = function () {
        $scope.data.price = 0;
        _.each($scope.data.data, function (val, key) {
            if (val.add) {
                $scope.data.price += (val.quantity * val.price);
            }
        });
    }
    $scope.removeItem = function (id) {
        var idx = _.findIndex($scope.data.data, { "id": id });
        $scope.data.data[idx]["add"] = false;
        $scope.priceCal();
    }
    $scope.buyProduct = function () {
        $scope.message = "Thank You!!";
        $scope.shop = "Shop Again";
    }
}])
    .filter('range', function () {
        return function (input, min, max) {
            min = parseInt(min);
            max = parseInt(max);
            for (var i = min; i < max; i++)
                input.push(i);
            return input;
        };
    });

