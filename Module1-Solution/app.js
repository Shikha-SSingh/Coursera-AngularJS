(function () {
	'use script'
	angular.module('LunchCheck',[]).
	controller('LunchCheckController',function($scope){
		$scope.item = "";
		$scope.Message ="";
		$scope.len=0;
		$scope.getItemCount=function(){
			var items_lunch = $scope.item.split(",");
			$scope.len =items_lunch.length;
			if($scope.item == "") $scope.Message="Please enter data first";
			else {
			if(($scope.len>=1) && ($scope.len<=3))$scope.Message ="Enjoy!";
			else if($scope.len>3) $scope.Message ="Too much!";
		}
			
		};

	});
}
	)

();