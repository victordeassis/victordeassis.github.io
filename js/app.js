var app = angular.module("myApp", ["firebase"]);

app.controller("myController", function ($scope, $firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    // create a synchronized array
    // click on `index.html` above to see it used in the DOM!
    $scope.messages = $firebaseArray(ref);

    $scope.addMessage = function () {
        $scope.messages.$add({
            text: $scope.newMessageText
        });
    };
});