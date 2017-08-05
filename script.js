var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
	$scope.InsurencObj = {
		product: [{
			id: "0", Name: "A", Catogery: "TypA", Code: "1001",
			Entity: [{
				Id: "1", Name: "Entity1", Code: "2001", isSelected: false, isCustom: false,
				Attribute: [{
					Id: "1", Name: "Att1", Code: "2001", isSelected: false, isCustom: false,
				}, {
					Id: "1", Name: "Att1", Code: "2001", isSelected: false, isCustom: false,
				}]
			}, {
				Id: "1", Name: "Entity1", Code: "2001", isSelected: false, isCustom: false,
				Attribute: [{
					Id: "1", Name: "Att1", Code: "2001", isSelected: false, isCustom: false,
				}, {
					Id: "1", Name: "Att1", Code: "2001", isSelected: false, isCustom: false,
				}]
			}]
		},
		{
			id: "0", Name: "B", Catogery: "TypA", Code: "1001",
			Entity: [{
				Id: "1", Name: "Entity1", Code: "2001", isSelected: false, isCustom: false,
				Attribute: [{
					Id: "1", Name: "Att1", Code: "2001", isSelected: false, isCustom: false,
				}]
			}]
		}]
	}
	$scope.expandClick = function (x) {
		if (x.showObj === undefined) {
			x.showObj = true;
		} else {
			x.showObj = !x.showObj;
		}
	}
	$scope.addObj = function (x) {
		if (x.showAttribute === undefined) {
			x.showAttribute = true;
		}

		x.push({
			Id: "",
			Name: "",
			Code: "",
			isSelected: false,
			isCustom: true
		});
	}

});


