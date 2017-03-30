angular.module('wangkelongApp')


	.controller('tianjiaCtrl', function($scope, $http, $location, $state) {
		if(sessionStorage.qw) {
			$scope.tij = function() {
				var spmc = $scope.userName
				var djbh = $scope.mobile
				var dhsl = $scope.cunt
				var dhze = $scope.ed
				var dhrq = $scope.rq
				var jhj = $scope.jh
				if($scope.mobile == null || $scope.cunt == null || $scope.ed == null || $scope.userName == null || $scope.rq == null || $scope.jh == null) {
					$scope.isShow2 = true;
					$scope.goto = "都为必填项!";
					$scope.qd = function() {
						$scope.isShow2 = false;
					}
				} else {
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
							songhuozhuangtai: 0,
							classify: 0,
							uid: localStorage.uid
						}
					}).then(function(data) {
						$scope.isShow2 = true;
						$scope.goto = "提交成功!"
						$scope.qd = function() {
							$scope.isShow2 = false;
							$location.url("/dingdan")
						}

					})
					$scope.save = function() {
						if($scope.myForm.$valid) {
							var datajson = {
								userName: $scope.userName,
								mobile: $scope.mobile,
								cunt: $scope.cunt,
								ed: $scope.ed,
								rq: $scope.rq,
								jh: $scope.jh,
							}
						}
					}
				}
			}
		} else {
			$scope.isShow = true
			$scope.go = "请先登录!"
			$scope.queding = function() {
				$scope.isShow = false
				$state.go("dengru")
			}
		}
	});