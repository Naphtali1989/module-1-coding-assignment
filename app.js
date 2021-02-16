'use strict';

(() => {
    angular.module('myFirstApp', [])
        .controller('FoodController', FoodController);

    FoodController.$inject = ['$scope', '$filter']

    function FoodController($scope, $filter) {
        $scope.food = '';
        $scope.foodAmmount = 0;

        $scope.upper = () => {
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        }

        $scope.checkFoodAmount = () => {
            const foods = $scope.food.split(',').filter(food => food)
            $scope.foodAmmount = foods.length
        }

        $scope.showMsg = () => {
            if ($scope.foodAmmount > 3) return 'Too much!'
            else if ($scope.foodAmmount > 0) return 'Enjoy!'
            return 'Please enter data first'
        }
        $scope.msgStyle = () => {
            if ($scope.foodAmmount > 3) return { color: 'green' }
            else if ($scope.foodAmmount > 0) return 'Enjoy!'
            return ''
        }


    }
})();