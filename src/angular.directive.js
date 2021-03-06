// Angular directives for easyPieChart
if ((typeof(angular) === 'object') && (typeof(angular.version) === 'object')) {
	angular.module('easypiechart',[])
	.directive('easypiechart', [function() {
		return {
			restrict: 'A',
			require: '?ngModel',
			scope: {
				percent: '=',
				options: '='
			},
			link: function (scope, element, attrs) {
				var options = {
					barColor: '#ef1e25',
					trackColor: '#f9f9f9',
					scaleColor: '#dfe0e0',
					scaleLength: 5,
					lineCap: 'round',
					lineWidth: 3,
					size: 110,
					rotate: 0,
					animate: {
						duration: 1000,
						enabled: true
					}
				};
				angular.extend(options, scope.options);

				var pieChart = new EasyPieChart(element[0], options);

				// initial pie rendering
				if (scope.percent) {
					pieChart.update(scope.percent);
				}

				// on change of value
				scope.$watch('percent', function(newVal, oldVal) {
					pieChart.update(newVal);
				});
			}
		};
	}]);
} else{
	console.log('Angular not detected.');
}
