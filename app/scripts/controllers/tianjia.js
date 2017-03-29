angular.module('wangkelongApp')
	.controller('tianjiaCtrl', function($scope, $http, $location,$state) {
		$scope.tij = function() {
			var spmc = $scope.userName
			var djbh = $scope.mobile
			var dhsl = $scope.cunt
			var dhze = $scope.ed
			var dhrq = $scope.rq
			var jhj = $scope.jh
		if(sessionStorage.qw){
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
				}
				}, function() {
					alert('error')
			})}else{
				$state.go("dengru")
				alert("请先登录！")
			}
		}
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
	});