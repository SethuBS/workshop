// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('todo', ['ionic'])

app.controller('TodoCtrl', function($scope, $ionicModal) {
  // No need for testing data anymore
  $scope.tasks = [];

  // Create and load the Modal
  $ionicModal.fromTemplateUrl('new-task.html', function(modal) {
    $scope.taskModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  // Called when the form is submitted
  $scope.createTask = function(task) {
    $scope.tasks.push({
      title: task.title
    });
    $scope.taskModal.hide();
    task.title = "";
  };

  // Open our new task modal
  $scope.newTask = function() {
    $scope.taskModal.show();
  };

  // Close the new task modal
  $scope.closeNewTask = function() {
    $scope.taskModal.hide();

  };

    $scope.removeTask = function(task) {
    var index =  $scope.tasks.indexOf(task);
    $scope.tasks.splice(index, 1);
};

});


app.controller('editCtrl', function($scope, $ionicModal){
    $scope.tasks = [];

    // Create and load the Modal

    $ionicModal.fromTemplateUrl('update-task.html', function(modal) {
      $scope.taskModal = modal;
    }, {
      scope: $scope,
      animation: 'slide-in-up'
    });

    // Called when the form is submitted
    $scope.edit = function(task) {
      $scope.tasks.push({
        title: task.title
      });
      $scope.taskModal.hide();
      task.title = "";
    };

    // Open our new task modal
    $scope.exitsingTask = function() {
      $scope.taskModal.show();
    };

    // Close the new task modal
    $scope.closeExistingTask = function() {
      $scope.taskModal.hide();
    };
    $scope.editingData = [];

for (var i = 0, length = $scope.task.length; i < length; i++) {
  $scope.Edit[$scope.task[i].id] = false;
}
//

$scope.update = function(tableData){
    $scope.Edit[task.id] = false;
};

});
