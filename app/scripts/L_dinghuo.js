angular.module('wangkelongApp')
	.controller('dingdan', function($scope, $http, $location) {
		$scope.e = [];
		$scope.show = false;

		$scope.dj = function() {
			$scope.show = !$scope.show;
		}
		//显示详情
		xq();
		function xq() {
			$http({
					url: "http://47.88.16.225:409/item"
				}).then(function(data) {
					$scope.e=data.data;
//					$scope.shops = [];
//					for(var z = 0; z < $scope.e.length; z++) {
//						if($scope.e[z].classify == 0) {
//							$scope.shops.push(data.data[z])
//						}
//					}
//					$scope.e = $scope.shops;

					$scope.fnn();

					for(var i = 0; i < $scope.e.length; i++) {
						//				alert($scope.e.length)
						if($scope.e[i].songhuozhuangtai == "0") {
							$scope.e[i].songhuozhuangtai = "未配送"
						} else {
							$scope.e[i].songhuozhuangtai = "配送"
						}
					}
				}),
				function() {
					alert("error!")
				}
		}
		
		//分页
		//scope.e=[1,2,3,4,5];
		$scope.s = 0;
		$scope.fnn = function() {
			$scope.s++;
			$scope.num = $scope.e.length;
			$scope.page = Math.ceil($scope.num / 3);
			if($scope.s == $scope.page + 1) {
				$scope.s--;
				return;
			}
			$scope.data = $scope.e.slice(($scope.s - 1) * 3, (($scope.s - 1) * 3) + 3);
		}
//
		$scope.fn = function() {
			$scope.s--;
			$scope.num = $scope.e.length;
			$scope.page = Math.ceil($scope.num / 3);
			if($scope.s <= 0) {
				$scope.s++;
				return;
			}
			$scope.data = $scope.e.slice(($scope.s - 1) * 3, (($scope.s - 1) * 3) + 3);
		}
		//删除
		b();

		function b() {
			//		$scope.isChecked = function(id) {
			//			return $scope.selected.indexOf(id)>= 0;
			//		};

			$scope.updateSelection = function($event, id) {
				var checkbox = $event.target;
				var checked = checkbox.checked;
				if(checked) {
					$scope.aa = id;
				} else {
					$scope.selected.push(id);
				}
			};
		}
		$scope.shanchu = function() {
			$http({
				url: "http://47.88.16.225:409/item/" + $scope.aa,
				method: 'delete'
			}).then(function() {
				xq();
			})
		}
		//xiugai
		$scope.bianji = function($index) {

			localStorage.a = $scope.e[$index].mingcheng
			localStorage.b = $scope.e[$index].bianhao
			localStorage.c = $scope.e[$index].shuliang
			localStorage.d = $scope.e[$index].zonge
			localStorage.e = $scope.e[$index].riqi
			localStorage.f = $scope.e[$index].jinjia
			localStorage.g = $scope.e[$index].id
			$location.url("/xiugai")
		}
//		//入库
		$scope.ruku = function() {
			$http({
				url: "http://47.88.16.225:409/item/" + $scope.aa,
				method: 'get'
			}).then(function(response) {
				//				e.data.classify=1;
				for(var i = 0; i < $scope.e.length; i++) {
					if($scope.e[i].id == $scope.aa) {
						//$scope.ruMingcheng=$scope.e[i].mingcheng;
						$http({
							url: "http://47.88.16.225:409/item",
							method: "post",
							data: {
								mingcheng: $scope.e[i].mingcheng,
								bianhao: $scope.e[i].bianhao,
								shuliang: $scope.e[i].shuliang,
								zonge: $scope.e[i].zonge,
								riqi: $scope.e[i].riqi,
								jinjia: $scope.e[i].jinjia,
								songhuozhuangtai: 0,
								classify: 1,
								uid: localStorage.uid
							}
						}).then(function() {

						})
					}
					$scope.shanchu()
				}

			})
		}
		//关键字查找---过滤器
		$scope.$watch("kw", function() {
			if($scope.kw) {
				$http({
						url: "http://47.88.16.225:409/item"
					}).then(function(data) {

						$scope.data = data.data
					}),
					function() {
						alert("error!")
					}
			}
		})
		$scope.ssy = function() {
			$location.url('/zhuye')
		}
		$scope.rrk = function() {
			$location.url('/ruku')
		}
		$scope.ttc = function() {
			$location.url("/dengru")
		}
		$scope.ssyy = function() {
			$location.url("/zhuye2")
		}
	})