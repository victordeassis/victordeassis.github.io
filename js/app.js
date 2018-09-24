var app = angular.module("myApp", ["firebase"]);

app.controller("myController", function ($scope, $firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    // create a synchronized array
    // click on `index.html` above to see it used in the DOM!
    $scope.messages = $firebaseArray(ref);

    $scope.addMessage = function () {
        if ($scope.newMessageText.includes('buceta') || $scope.newMessageText.includes('cu') || $scope.newMessageText.includes('viado') || $scope.newMessageText.includes('bolsonaro') || $scope.newMessageText.includes('lula') || $scope.newMessageText.includes('sexo')) {
            alert('Achou que eu não ia me preparar pra isso? Achou errado otário!');
        } else {
            $scope.messages.$add({
                text: $scope.newMessageText
            });
            $scope.newMessageText = "";
        }
    };

    $scope.removeElement = function (message) {
        $scope.messages.$remove(message).then(function(ref) {
            ref.key === message.$id; // true
        });
    }
});