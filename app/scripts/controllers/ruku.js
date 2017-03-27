angular.module('wangkelongApp')
	.controller('ruku', function($scope, $http, $location) {
		$scope.dj = function() {
			$scope.show = !$scope.show;
		}
		
		$http({
				url: "http://47.88.16.225:409/item"
		}).then(function(data) {
				$scope.rushops=[];
				for(var k=0;k<data.data.length;k++){
					if(data.data[k].classify==1){
						$scope.rushops.push(data.data[k])
					}
				}
				$scope.e = $scope.rushops;

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
		
		
		
		
		b();
		function b(){
//		$scope.isChecked = function(id) {
//			return $scope.selected.indexOf(id)>= 0;
//		};

		$scope.updateSelection = function($event,id) {
			var checkbox = $event.target;
			var checked = checkbox.checked;
			if(checked) {				
				$scope.aa=id; 
			} else {
				$scope.selected.push(id);
			}
		};
		}
		$scope.tuihuo = function(){
			$http({
				url:"http://47.88.16.225:409/item/"+$scope.aa,
				method: 'delete'
			}).then(function(){
				location.reload();
			})
		}
		
		$scope.syy = function(){
			$location.url("/zhuye")
		}
		$scope.dhh = function(){
			$location.url("/dingdan")
		}
		$scope.tcc = function(){
			$location.url("/dengru")
		}
	})