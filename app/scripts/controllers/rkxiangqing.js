angular.module('wangkelongApp')
	.controller('rkxiangqing', function($scope, $http, $location, $state) {
		xq()

		function xq() {
			if(sessionStorage.qw) {
				//			显示详情
				$http({
						url: "http://47.88.16.225:409/item"
					}).then(function(data) {
						$scope.abc = []
						for(var i = 0; i < data.data.length; i++) {
							if(data.data[i].id == localStorage.aid) {
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
			} else {
				$scope.isShow = true
				$scope.go = "请先登录!"
				$scope.queding = function() {
					$scope.isShow = false
					$state.go("dengru")
				}
			}			
		}
		//出库
		$scope.chuku = function() {
			$http({
				url: "http://47.88.16.225:409/item/" + localStorage.aid,
				method: "delete"
			}).then(function(d) {

			})
		}
	})