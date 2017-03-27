angular.module('wangkelongApp')
	.controller('tianjiaCtrl', function($scope, $http, $location) {
		$scope.tij = function() {
			var spmc = $scope.spmc
			var djbh = $scope.djbh
			var dhsl = $scope.dhsl
			var dhze = $scope.dhze
			var dhrq = $scope.dhrq
			var jhj = $scope.jhj
				//alert($scope.spmc)
				/*$scope.spmc = data.data.mingcheng;
				$scope.djbh = data.data.bianhao;
				$scope.dhsl = data.data.shuliang;
				$scope.dhze = data.data.zonge;
				$scope.dhrq = data.data.riqi;
				$scope.jhj = data.data.jinjia;*/
			$http({
				url: "http://47.88.16.225:409/item",
				method: 'post',
				data: {
					mingcheng: spmc,
					bianhao: djbh,
					shuliang: dhsl,
					zonge: dhze,
					riqi: dhrq,
					jinjia: jhj,
					songhuozhuangtai:0,
					classify:0,
					uid:localStorage.uid
				}
			}).then(function(data) {
				//debugger

			}, function() {
				alert('error')
			})
		}
		$scope.ss = function(){
			$location.url("/zhuye")
		}
	});