angular.module('wangkelongApp')
	.controller('rkxiangqing', function($scope, $http, $location) {
		xq()

		function xq() {
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