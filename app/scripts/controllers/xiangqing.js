angular.module('wangkelongApp')
	.controller('xiangqing', function($scope, $http, $location, $state) {
		//			显示详情
		if(sessionStorage.qw) {
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
				},function() {
					alert("error!")
				})
				
		} else {
			$scope.isShow = true
			$scope.go = "请先登录!"
			$scope.queding = function() {
				$scope.isShow = false
				$state.go("dengru")
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
				}).then(function(data) {
					localStorage.a = data.data.mingcheng
					localStorage.b = data.data.bianhao
					localStorage.c = data.data.shuliang
					localStorage.d = data.data.zonge
					localStorage.e = data.data.riqi
					localStorage.f = data.data.jinjia
					$location.url("/xiugai")
				})
			}
			//入库
		$scope.ruku = function() {
			$http({
				url: "http://47.88.16.225:409/item/" + localStorage.aid,
				method: 'post',
				data: {
					mingcheng: $scope.mingcheng,
					bianhao: $scope.bianhao,
					shuliang: $scope.shuliang,
					zonge: $scope.zonge,
					riqi: $scope.riqi,
					jinjia: $scope.jinjia,
					songhuozhuangtai: 1
				}
			}).then(function(data) {
				$location.url("/ruku")
			})
		}
	})