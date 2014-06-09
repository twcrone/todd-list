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
});

