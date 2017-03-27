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
  });
