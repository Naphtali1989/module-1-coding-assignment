'use strict';

(() => {
    angular.module('myFirstApp', [])
        .controller('DIController', DIController);

    DIController.$inject = ['$scope', '$filter']

    function DIController($scope, $filter) {
        $scope.name = 'Naphtali';

        $scope.upper = () => {
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        }
    }
})();