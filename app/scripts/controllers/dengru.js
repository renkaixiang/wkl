'use strict';

/**
 * @ngdoc overview
 * @name shixun1App
 * @description
 * # shixun1App
 *
 * Main module of the application.
 */
angular
	.module("wangkelongApp").controller("dengru", ["$rootScope", "$scope", "$http", "$state", "$interval", "$timeout", "$location", function($rootScope, $scope, $http, $state, $interval, $timeout, $location) {
		$scope.updata = {}
		$scope.check = false
		sessionStorage.clear()
			//获取cookie
		function getcookie(objname) {
			var str = document.cookie.split("; ");
			for(var i = 0; i < str.length; i++) {
				var arr = str[i].split("=");
				if(arr[0] == objname) return unescape(arr[1]);
			}
		}
		//获取账号
		$scope.cookuser = getcookie('username')
		//如果有则自定填写
		if($scope.cookuser) {
			$scope.updata.username = $scope.cookuser
		}
		$scope.login = function() {
			if($scope.updata.username == null && $scope.updata.password == null) {
				$scope.isShow = true
				$scope.go = "请输入用户名或密码!"
				$scope.queding = function() {
					$scope.isShow = false
				}
			} else if($scope.updata.username == null && $scope.updata.password != null) {
				$scope.isShow = true
				$scope.go = "请输入用户名!"
				$scope.queding = function() {
					$scope.isShow = false
					location.reload()
				}
			} else if($scope.updata.password == null && $scope.updata.username != null) {
				$scope.isShow = true
				$scope.go = "请输入用户密码!"
				$scope.queding = function() {
					$scope.isShow = false
					location.reload()
				}
			} else if($scope.updata) {
				if($scope.check == true) {
					function setCookie(cookie_name, value, Path, timeout) {
						var date = new Date();
						date.setDate(date.getDate() + timeout)
						document.cookie = cookie_name + "=" + escape(value) + ";path" + "=" + Path +
							';expires=' + date.toGMTString()
					}
					setCookie('username', $scope.updata.username, '/', 7)        
				}
				$http({
					url: "http://47.88.16.225:409/users/login",
					data: $scope.updata,
					method: "post"
				}).then(function(e) {
					$scope.uid = e.data.uid
					$http({
						url: "http://47.88.16.225:409/users/" + $scope.uid,
						method: "get"
					}).then(function(e) {
						
						if(e.data.juese == 0) {
							localStorage.uid=$scope.uid;
							sessionStorage.qw = 3;
							$location.url("/zhuye")
						} else if(e.data.juese == 1) {
							sessionStorage.qe = 4;
							$location.url("/zhuye2")
						}
					})
				}, function() {
					$scope.isShow = true
					$scope.go = "请输入正确的用户密码或密码!"
					$scope.queding = function() {
						$scope.isShow = false
						location.reload()
					}
				})
			}
			
		}
	}])