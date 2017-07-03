var statusapp = angular.module("statusapp", [])

statusapp.controller("statusctrl", ['$scope', '$timeout', function ($scope, $timeout) {
    $scope.helloworld = "Hello World!";
    $scope.progress = 0;
    $scope.doprogress = true;
    $scope.startprogress = function () {
        $scope.doprogress = true;
        $scope.updateprogress();
    };
    $scope.updateprogress = function () {
        if ($scope.progress < 100 && $scope.doprogress) {
            $timeout(function () {
                $scope.progress = $scope.progress + 1;
                $scope.updateprogress();
            }, 100);
        }
    }
    $scope.stopprogress = function () {
        $scope.doprogress = false;
    };
    $scope.resetprogress = function () {
        $scope.progress = 0;
    };
    $scope.showLog = function () {
        alert("Show Log coming soon");
    };
    $scope.progressclass = 'success';
    $scope.shoprogressbar = 'true';
    
}])