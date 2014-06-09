var app = angular.module('lists', []);

app.controller('listItems', [ '$scope', function($scope) {
	$scope.title = 'Todo List';
	$scope.items = [
		{ title: 'Laundry' },
		{ title: 'Mow Lawn' },
		{ title: 'Take out trash' }
	];

	$scope.addItem = function() {
		$scope.items.push({ title: $scope.newItem });
		$scope.newItem = '';
	}

	$scope.removeItem = function(index) {
		$scope.items.splice(index, 1);
	}

	$scope.newItemValid = function(newItem) {
		if(newItem == undefined || newItem == null) {
			return false;
		}
		var count = $scope.items.length;

		for (var i = 0; i < count; ++i) {
			if($scope.items[i].title == newItem) {
				return false;
			}	
		}
		var length = newItem.trim().length
		return length > 0 && length < 31; 
	}
}]);

