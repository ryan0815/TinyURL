/**
 * Created by Nathan on 9/3/2016.
 */
angular.module('tinyUrl').controller('userNavController', ['$rootScope','$scope', 'authService', '$http', '$state',
    function ($rootScope, $scope, authService, $http, $state) {

        authService.userdash().then(function (data) {
            $rootScope.user = data.user;
            $scope.username = $rootScope.user.username;
        });

        $scope.logout = function () {
            authService.logout();
            $state.go('home');
        };

        $scope.shortUrl = '';
        $scope.search = function () {
            $state.go('home.user.urlInfo', {shortUrl: $scope.shortUrl});
            $scope.shortUrl = '';
        };
    }]);