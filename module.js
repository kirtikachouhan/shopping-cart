var underscore = angular.module('underscore', []);
underscore.factory('_', function () {
    return window._;
});
var myApp = angular.module('ngShopApp', ['ui.router', 'ui.bootstrap', 'underscore']);

myApp.config(function ($stateProvider) {
    var states = [{
        name: 'search',
        url: '/search',
        component: 'searchComponent'
    },
    {
        name: 'cart',
        url: '/cart',
        component: 'cartComponent'
    }];
    states.forEach(function (state) {
        $stateProvider.state(state);
    });
});

myApp.component('searchComponent', {
    templateUrl: './search/search.html',
    controller: 'SearchCtrl'
});
myApp.component('cartComponent', {
    templateUrl: './cart/cart.html',
    controller: 'CartCtrl'
});