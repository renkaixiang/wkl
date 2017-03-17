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
	.module('wangkelongApp', ['ui.router']).config(function($urlRouterProvider, $stateProvider) {
		$stateProvider.state('dengru', {
			url: "/dengru",
			templateUrl: "views/dengru.html"
		})
		.state('zhuye', {
			url: "/zhuye",
			templateUrl: "views/zhuye.html"
		})
		.state('dingdan', {
			url: "/dingdan",
			templateUrl: "views/dingdan.html"
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
		$urlRouterProvider.when("", "/dengru")
	});
