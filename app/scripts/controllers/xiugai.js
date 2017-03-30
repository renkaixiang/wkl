angular.module('wangkelongApp')
	.controller('xiugai', function($scope, $http, $location, $state) {
		$scope.spmc = localStorage.a;
		$scope.djbh = localStorage.b;
		$scope.dhsl = localStorage.c;
		$scope.dhze = localStorage.d;
		$scope.dhrq = localStorage.e;
		$scope.jhj = localStorage.f;
		$scope.ppl = function() {
			if(sessionStorage.qw) {
				$http({
					url: "http://47.88.16.225:409/item/" + localStorage.aid,
					method: "put",
					data: {
						mingcheng: $scope.spmc,
						bianhao: $scope.djbh,
						shuliang: $scope.dhsl,
						zonge: $scope.dhze,
						riqi: $scope.dhrq,
						jinjia: $scope.jhj
					}
				}).then(function(data) {
					$location.url('/xiangqing');
				})
			} else {
				$scope.isShow = true
				$scope.go = "请先登录!"
				$scope.queding = function() {
					$scope.isShow = false
					$state.go("dengru")
				}
			}

		}
	})