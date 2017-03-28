angular.module('wangkelongApp')
	.controller('tianjiaCtrl', function($scope, $http, $location) {
		$scope.tij = function() {
			var spmc = $scope.userName
			var djbh = $scope.mobile
			var dhsl = $scope.cunt
			var dhze = $scope.ed
			var dhrq = $scope.rq
			var jhj = $scope.jh
				//alert($scope.spmc)
				/*$scope.spmc = data.data.mingcheng;
				$scope.djbh = data.data.bianhao;
				$scope.dhsl = data.data.shuliang;
				$scope.dhze = data.data.zonge;
				$scope.dhrq = data.data.riqi;
				$scope.jhj = data.data.jinjia;*/
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
				//debugger

			}, function() {
				alert('error')
			})
		}
<<<<<<< HEAD
		$scope.ss = function() {
				$location.url("/zhuye")
			}
			//验证
			//		function c(){
			//			var shopname = document.getElementById('spmc').value;
			//			var shopnumber = document.getElementById('dhsl').value;
			//			var shopcount = document.getElementById('dhze').value;
			//			var shopdate = document.getElementById('dhrq').value;
			//			var shopprice = document.getElementById('jhj').value;
			//			var aInput = document.getElementsByTagName('input');
			//			var re1=/^[\u4e00-\u9fa5]{2,5}$/;
			//			var re2=/^[0-9]{11}$/;
			//			var re3=/^[\u4e00-\u9fa5]{1,200}$/;
			//			
			//			for(var i=0;i<aInput.length;i++){
			//				aInput[i].onblur = function(){
			//					if(!(re1.test(shopname))){
			//						alert("只能为2或5个汉字。");
			//						return false;
			//					}
			//				}
			//			}
			//		}
		$scope.save = function() {
			var myselect = document.getElementById("company");
			var index = myselect.selectedIndex;
			var companyVal = myselect.options[index].value;
			var companyText = myselect.options[index].text;
			//获取到表单是否验证通过
			if($scope.myForm.$valid) {
				var datajson = {
					userName: $scope.userName,
					mobile: $scope.mobile,
					cunt: $scope.cunt,
					ed: $scope.ed,
					rq: $scope.rq,
					jh: $scope.jh,
					companyVal: companyVal,
					companyText: companyText
				}
				/* $http({
				     method  : 'POST',
				     url     : '',
				     params    : pData,  
				     headers : { 'Content-Type': 'application/x-www-form-urlencoded' } 
				 })
				 .success(function(data) {
				    alert('表单通过');
				 });*/
=======
		$scope.ss = function(){
			$location.url("/zhuye")
		}
		//验证
//		function c(){
//			var shopname = document.getElementById('spmc').value;
//			var shopnumber = document.getElementById('dhsl').value;
//			var shopcount = document.getElementById('dhze').value;
//			var shopdate = document.getElementById('dhrq').value;
//			var shopprice = document.getElementById('jhj').value;
//			var aInput = document.getElementsByTagName('input');
//			var re1=/^[\u4e00-\u9fa5]{2,5}$/;
//			var re2=/^[0-9]{11}$/;
//			var re3=/^[\u4e00-\u9fa5]{1,200}$/;
//			
//			for(var i=0;i<aInput.length;i++){
//				aInput[i].onblur = function(){
//					if(!(re1.test(shopname))){
//						alert("只能为2或5个汉字。");
//						return false;
//					}
//				}
//			}
//		}
   $scope.save = function () {
//      var myselect=document.getElementById("company");
//      var index=myselect.selectedIndex ; 
//      var companyVal=myselect.options[index].value;
//      var companyText=myselect.options[index].text;
        //获取到表单是否验证通过
        if($scope.myForm.$valid){
            var datajson = {
                userName:$scope.userName,
                mobile:$scope.mobile,
                cunt:$scope.cunt,
                ed:$scope.ed,
                rq:$scope.rq,
                jh:$scope.jh,
//              companyVal:companyVal,
//              companyText:companyText
            }   
            console.log(datajson);
            
       /* $http({
            method  : 'POST',
            url     : '',
            params    : pData,  
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' } 
        })
        .success(function(data) {
           alert('表单通过');
        });*/
>>>>>>> origin/master

			} else {
				alert('表单没有通过验证');
			}
		}
	});