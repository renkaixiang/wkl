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
	.module('wangkelongApp',["ui.router"]).config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.when("", "/dengru")
		$stateProvider.state('dengru', {
			url: "/dengru",
			templateUrl: "views/dengru.html"
		})
		.state('zhuye', {
			url: "/zhuye",
			templateUrl: "views/zhuye.html"
		})
		.state('zhuye2', {
			url: "/zhuye2",
			templateUrl: "views/zhuye2.html"
		})
		.state('dingdan', {
			url: "/dingdan",
			templateUrl: "views/dingdan.html"
		})
		.state('dingdan2', {
			url: "/dingdan2",
			templateUrl: "views/dingdan2.html"
		})
		.state('ruku', {
			url: "/ruku",
			templateUrl: "views/ruku.html"
		})
		.state('tuihuo', {
			url: "/tuihuo",
			templateUrl: "views/tuihuo.html"
		})
		.state('tianjia', {
			url: "/tianjia",
			templateUrl: "views/tianjia.html"
		})
		.state('xiugai', {
			url: "/xiugai",
			templateUrl: "views/xiugai.html"
		})
		.state('xiangqing', {
			url: "/xiangqing",
			templateUrl: "views/xiangqing.html"
		})
	}])
