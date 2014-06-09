var app = angular.module('lists', []);

app.controller('listItems', function($scope) {
	$scope.title = 'Todo List';
	$scope.items = [
		{ title: 'Laundry' },
		{ title: 'Mow Lawn' },
		{ title: 'Take out trash' }
	];
});

