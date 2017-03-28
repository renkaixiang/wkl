angular.module('wangkelongApp')
	.controller('dingdan', function($scope, $http, $location) {
		$scope.e = [];
		$scope.show = false;
		$scope.dj = function() {
				$scope.show = !$scope.show;
			}
			//显示详情
		$http({
				url: "http://47.88.16.225:409/item"
			}).then(function(data) {
				$scope.e = data.data;
				content.style.display = "none"
			}),
			function() {
				alert("error!")
			}
		$scope.cz = function(id) {
				sessionStorage.aid = id
			}
			//		//xiugai
			//		$scope.bianji = function($index) {
			//				localStorage.a = $scope.e[$index].mingcheng
			//				localStorage.b = $scope.e[$index].bianhao
			//				localStorage.c = $scope.e[$index].shuliang
			//				localStorage.d = $scope.e[$index].zonge
			//				localStorage.e = $scope.e[$index].riqi
			//				localStorage.f = $scope.e[$index].jinjia
			//				localStorage.g = $scope.e[$index].id
			//				$location.url("/xiugai")
			//			}
			//		//入库
			//		$scope.ruku = function() {
			//				$http({
			//					url: "http://47.88.16.225:409/item/" + $scope.aa,
			//					method: 'get'
			//				}).then(function(response) {
			//					//				e.data.classify=1;
			//					for(var i = 0; i < $scope.e.length; i++) {
			//						if($scope.e[i].id == $scope.aa) {
			//							//$scope.ruMingcheng=$scope.e[i].mingcheng;
			//							$http({
			//								url: "http://47.88.16.225:409/item",
			//								method: "post",
			//								data: {
			//									mingcheng: $scope.e[i].mingcheng,
			//									bianhao: $scope.e[i].bianhao,
			//									shuliang: $scope.e[i].shuliang,
			//									zonge: $scope.e[i].zonge,
			//									riqi: $scope.e[i].riqi,
			//									jinjia: $scope.e[i].jinjia,
			//									songhuozhuangtai: 0,
			//									classify: 1,
			//									uid: localStorage.uid
			//								}
			//							}).then(function() {
			//
			//							})
			//						}
			//						$scope.shanchu()
			//					}
			//
			//				})
			//			}
			//关键字查找---过滤器
			//		$scope.$watch("kw", function() {
			//			if($scope.kw) {
			//				$http({
			//						url: "http://47.88.16.225:409/item"
			//					}).then(function(data) {
			//
			//						$scope.data = data.data
			//					}),
			//					function() {
			//						alert("error!")
			//					}
			//			}
			//		})
		$scope.ssy = function() {
			$location.url('/zhuye')
		}
		$scope.rrk = function() {
			$location.url('/ruku')
		}
		$scope.ttc = function() {
			$location.url("/dengru")
		}

		$.fn.spin = function(opts) {
			this.each(function() {
				var $this = $(this),
					data = $this.data();
				if (data.spinner) {
					data.spinner.stop();
					delete data.spinner;
				}
				if (opts !== false) {
					data.spinner = new Spinner($.extend({
						color: $this.css('color')
					}, opts)).spin(this);
				}
			});
			return this;
		};
		prettyPrint();

		function update() {
			var opts = {};
			$('#opts input[min]').each(function() {
				$('#opt-' + this.name).text(opts[this.name] = parseFloat(this.value));
			});
			$('#opts input:checkbox').each(function() {
				opts[this.name] = this.checked;
				$('#opt-' + this.name).text(this.checked);
			});
			$('#preview').spin(opts);
			if ($('#share').is(':checked')) {
				window.location.replace('#?' + $('form').serialize());
			}
		}
		$(function() {
			var params = {};
			var hash = /^#\?(.*)/.exec(location.hash);
			if (hash) {
				$('#share').prop('checked', true);
				$.each(hash[1].split(/&/), function(i, pair) {
					var kv = pair.split(/=/);
					params[kv[0]] = kv[kv.length - 1];
				});
			}
			$('#opts input[min]').each(function() {
				var val = params[this.name];
				if (val !== undefined) this.value = val;
				this.onchange = update;
			});
			$('#opts input:checkbox').each(function() {
				this.checked = !!params[this.name];
				this.onclick = update;
			});
			$('#share').click(function() {
				window.location.replace(this.checked ? '#?' + $('form').serialize() : '#!');
			});
			update();
		});
		//for(var i = 0;i<$scope.e.length;i++){
		//	
		//}

//		console.log($("#qqq").length)
//		for (var i = 0; i < $("#qqq").size; i++) {
//			if ($("#qqq")[i]) {
//				content.style.display = "none"
//			} else {
//				content.style.display = "block"
//			}
//		}

	})