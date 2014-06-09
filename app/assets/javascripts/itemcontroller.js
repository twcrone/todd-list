var app = angular.module('lists', []);

app.controller('listItems', function($scope) {
	$scope.title = 'Todo List';
	$scope.items = [
		{ title: 'Laundry' },
		{ title: 'Mow Lawn' },
		{ title: 'Take out trash' }
	];

	$scope.addItem = function(newItem) {
		$scope.items.push({ title: newItem });
	}

	$scope.newItemValid = function(newItem) {
		if(newItem == undefined || newItem == null) {
			return false;
		}
		var length = newItem.trim().length
		return length > 0 && length < 31; 
	}
});

