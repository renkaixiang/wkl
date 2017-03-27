angular.module('wangkelongApp')
	.controller('xiangqing', function($scope, $http, $location) {
		xq()

		function xq() {
			//			显示详情
			$http({
					url: "http://47.88.16.225:409/item"
				}).then(function(data) {
					$scope.abc = []
					for(var i = 0; i < data.data.length; i++) {
						if(data.data[i].id == sessionStorage.aid) {
							$scope.abc.push(data.data[i])
						}
					}
					for(var i = 0; i < data.data.length; i++) {
						if(data.data[i].songhuozhuangtai == "0") {
							data.data[i].songhuozhuangtai = "未配送"
						} else {
							data.data[i].songhuozhuangtai = "配送"
						}
					}
				}),
				function() {
					alert("error!")
				}
		}
		//删除
		$scope.shanchu = function() {
				$http({
					url: "http://47.88.16.225:409/item/" + sessionStorage.aid,
					method: "delete"
				}).then(function(d) {
					$location.url("/dingdan")
				})
			}
			//编辑
		$scope.bianji = function($index) {
			localStorage.a = $scope.e[$index].mingcheng
			localStorage.b = $scope.e[$index].bianhao
			localStorage.c = $scope.e[$index].shuliang
			localStorage.d = $scope.e[$index].zonge
			localStorage.e = $scope.e[$index].riqi
			localStorage.f = $scope.e[$index].jinjia
			$location.url("/xiugai")
		}
	})