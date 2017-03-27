angular.module('wangkelongApp')
	.controller('xiugai', function($scope, $http, $location) {
			$scope.spmc=localStorage.a;
			$scope.djbh=localStorage.b;
			$scope.dhsl=localStorage.c;
			$scope.dhze=localStorage.d;
			$scope.dhrq=localStorage.e;
			$scope.jhj=localStorage.f;
			$scope.tij=function(){
				$http({
					url:"http://47.88.16.225:409/item/"+localStorage.g,
					method:'post',
					data:{
						mingcheng:$scope.spmc,
						bianhao:$scope.djbh,
						shuliang:$scope.dhsl,
						zonge:$scope.dhze,
						riqi:$scope.dhrq,
						jinjia:$scope.jhj
					}
				}).then(function(){
					$location.url('/dingdan');
				})
			}
			$scope.st = function(){
				$location.url('/dingdan');
			}
	})