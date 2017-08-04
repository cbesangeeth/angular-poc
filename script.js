/**
 * 
 */
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
	$scope.InsurencObj = {
		product : [

		{
			id : "0",
			Name : "A",
			Catogery : "TypA",
			Code : "1001",
			

			Entity : [ {
				Id : "1",
				Name : "Entity1",
				Code : "2001",
				Attribute : [ {
					Id : "1",
					Name : "Att1",
					Code : "2001"
				}, {
					Id : "1",
					Name : "Att1",
					Code : "2001"
				} ]
			}, {
				Id : "1",
				Name : "Entity1",
				Code : "2001",
				Attribute : [ {
					Id : "1",
					Name : "Att1",
					Code : "2001"
				}, {
					Id : "1",
					Name : "Att1",
					Code : "2001"
				} ]
			} ]
		}

		,

		{
			id : "0",
			Name : "B",
			Catogery : "TypA",
			Code : "1001",

			Entity : [ {
				Id : "1",
				Name : "Entity1",
				Code : "2001",
				Attribute : [ {
					Id : "1",
					Name : "Att1",
					Code : "2001"
				} ]
			} ]
		} ]
	}
	$scope.productClick = function(x){
		if(x.showEntity === undefined){
			x.showEntity = true;
		}else{
			x.showEntity = !x.showEntity;
		}
	}
	$scope.entityClick = function(x){
		if(x.showAttribute === undefined){
			x.showAttribute = true;
		}else{
			x.showAttribute = !x.showAttribute;
		}
	}
});


