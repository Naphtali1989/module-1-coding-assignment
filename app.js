'use strict';

(() => {
    angular.module('myFirstApp', [])
        .controller('FoodController', FoodController);

    FoodController.$inject = ['$scope', '$filter']

    function FoodController($scope, $filter) {
        $scope.food = '';
        $scope.foodAmmount = 0;

        $scope.checkFoodAmount = () => {
            const foods = $scope.food.split(',').filter(food => food.trim().length > 0)
            $scope.foodAmmount = foods.length
        }

        $scope.showMsg = () => {
            if ($scope.foodAmmount > 3) return 'Too much!'
            else if ($scope.foodAmmount > 0) return 'Enjoy!'
            return 'Please enter data first'
        }

        $scope.msgStyle = () => {
            if ($scope.foodAmmount > 0) return { color: 'green', border: '1px solid green' }
            return { color: 'red', border: '1px solid red' }
        }

    }
})();