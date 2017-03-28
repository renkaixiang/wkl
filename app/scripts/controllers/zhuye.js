angular.module('wangkelongApp')
  .controller('zhuyeCtrl', function ($scope, $location) {
  		$scope.show = false;
			$scope.dj = function(){
				$scope.show = !$scope.show;
			}			
			$scope.tc = function(){
				$location.url("/dengru")
			}
			$scope.tj = function(){
				$location.url("/tianjia")
			}
			$scope.dh = function(){
				$location.url("/dingdan")
			}
			$scope.rk = function(){
				$location.url("/ruku")
			}
			$scope.xix = function(){
				$location.url("/dingdan2")
			}
			//最新公告
			$http({
				url: "http://47.88.16.225:409/item",
				method: 'get'
			}).then(function(data){
				$scope.shops=[];
				for (var i=0;i<data.data.length;i++) {
					$scope.shops.unshift(data.data[i])
				}
				
			})
  });
