function  myfunc(value) {
    localStorage.setItem("id",value)
}
var myApp = angular.module("myApp5", ['ui.router']);
myApp.controller("LoginController", LoginController);

function LoginController() {
    var login = this;
    // login.submit = function() {
    //     login.completed = true;
    // }
}
myApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('movie-view', {
            url: '/first',
            templateUrl: '/pages/movie-view.html',
            controller: 'twelveController'
        })
        .state('root', {
            url: '/',
            templateUrl: "/pages/movies-list.html",
            controller: 'rootController'
        })
    $urlRouterProvider.otherwise('/');

});

myApp.controller("twelveController", function ($scope, $http,$sce) {
            
            var data = {
                id: localStorage.getItem("id"), 
            }
            console.log(data)
            $http.post("https://bb1e48a6e9de.ngrok.io/movies/view/", JSON.stringify(data))
            .then(function (response) {
                console.log(response);
                console.log(response.data);   
                $scope.employees = response.data;     
                console.log($scope.employees[0].url)
                url=$scope.employees[0].url
                $scope.embedUrl=$sce.trustAsResourceUrl(url)
        })
        var data = {
            movieList_id: localStorage.getItem("id"), 
        }
        $http.post("https://bb1e48a6e9de.ngrok.io/movies/viewComment/", JSON.stringify(data))
        .then(function (response) {
            console.log(response);
            console.log(response.data);   
            $scope.comments = response.data;     
        })
        a = localStorage.getItem("user_id")
        ab = a[7]
        console.log(ab)
        $scope.addcmnts = function (addcmnt) {
        var data = {
            movieList_id: localStorage.getItem("id"), 
            user_id:ab,
            comments: addcmnt
        }
        console.log(data)
        $http.post("https://bb1e48a6e9de.ngrok.io/movies/comment/", JSON.stringify(data))
        .then(function (response) {
            console.log(response);
            console.log(response.data);   
            $scope.addcomments = response.data;
            alert('successfully Registered')
            location.reload();     
        })

}
});

myApp.controller("rootController", function ($scope, $http,$sce) {
    $http.get('https://bb1e48a6e9de.ngrok.io/movies/list/')
    .then(function (response) {
        $scope.employees = response.data;
        console.log($scope.employees)
    })
});