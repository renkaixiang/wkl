angular.module('wangkelongApp')
	.controller('dingdan2', function($scope, $http, $location, $state) {
		$scope.e = [];
		$scope.show = false;
		$scope.dj = function() {
				$scope.show = !$scope.show;
			}
			//显示详情
		if(sessionStorage.qe) {
			$http({
					url: "http://47.88.16.225:409/item"
				}).then(function(data) {
					$scope.bcd = [];
					$scope.e = data.data;
					content.style.display = "none"
					for(i = 0; i < data.data.length; i++) {
						if(data.data[i].songhuozhuangtai == "0") {
							$scope.bcd.push(data.data[i])
						}
					}
				}),
				function() {
					alert("error!")
				}
			$.fn.spin = function(opts) {
				this.each(function() {
					var $this = $(this),
						data = $this.data();
					if(data.spinner) {
						data.spinner.stop();
						delete data.spinner;
					}
					if(opts !== false) {
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
				if($('#share').is(':checked')) {
					window.location.replace('#?' + $('form').serialize());
				}
			}
			$(function() {
				var params = {};
				var hash = /^#\?(.*)/.exec(location.hash);
				if(hash) {
					$('#share').prop('checked', true);
					$.each(hash[1].split(/&/), function(pair) {
						var kv = pair.split(/=/);
						params[kv[0]] = kv[kv.length - 1];
					});
				}
				$('#opts input[min]').each(function() {
					var val = params[this.name];
					if(val !== undefined) this.value = val;
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
		} else {
			$scope.isShow = true
			$scope.go = "请先登录!"
			$scope.queding = function() {
				$scope.isShow = false
				$state.go("dengru")
			}
		}

		$scope.cz = function(id) {
			localStorage.aid = id
		}

	})