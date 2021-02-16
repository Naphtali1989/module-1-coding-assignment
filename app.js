'use strict';

(() => {
    angular.module('myFirstApp', [])
        .controller('FoodController', FoodController);

    FoodController.$inject = ['$scope', '$filter']

    function FoodController($scope, $filter) {
        $scope.name = 'Naphtali';

        $scope.upper = () => {
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        }
    }
})();