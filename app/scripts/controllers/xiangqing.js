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
		//删除
		$scope.shanchu = function() {
				$http({
					url: "http://47.88.16.225:409/item/" + localStorage.aid,
					method: "delete"
				}).then(function(d) {
					$location.url("/dingdan")
				})
			}
			//编辑
		$scope.bianji = function() {
			$http({
				url: "http://47.88.16.225:409/item/" + localStorage.aid,
			}).then(function(data){
				localStorage.a = data.data.mingcheng
				localStorage.b = data.data.bianhao
				localStorage.c = data.data.shuliang
				localStorage.d = data.data.zonge
				localStorage.e = data.data.riqi
				localStorage.f = data.data.jinjia							
				$location.url("/xiugai")
			})
			

		}
	})