function deletCmnt(value){
    localStorage.setItem('movieid',value)
}
function deletCmnts(value){
    localStorage.setItem('cmntid',value)
}

var myApp = angular.module("myApp5", ['ui.router']);
var  patient_profile = localStorage.getItem('patient_profile')
console.log(patient_profile)
myApp.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('addMore', {
        url: '/first',
        templateUrl:'/pages/appoint.html',
        controller :'addController'
    })
    .state('allmovies', {
        url: '/notification',
        templateUrl:'/pages/allmovies.html',
        controller :'secondController'
    })
    .state('editmovies', {
        url: '/notification',
        templateUrl:'/pages/editmovie.html',
        controller :'editController'
    })
    .state('patient-report', {
        url: '/report',
        templateUrl:'/patient/patient-report.html',
        controller :'reportController'
    })
    .state('comments', {
        url: '/comment',
        templateUrl:'/pages/Comments.html',
        controller :'commentController'
    })
    // .state('status', {
    //     url: '/status',
    //     templateUrl:'/patient/status.html',
    //     controller :'statusController'
    // })
    
    .state('root', {
        url: '/',
        templateUrl: "/pages/patient-home.html",
        controller :'HomeController'

    })
    $urlRouterProvider.otherwise('/');

});
myApp.controller("HomeController", function ($scope, $http) {
    var patient_profile = localStorage.getItem('patient_profile');
    var patient_profile = JSON.parse(patient_profile)
    $scope.patient_profile = patient_profile;
})

// -------------------------------appointment----------------------------------
myApp.controller("addController", function ($scope, $http) {
    console.log('SVD')
    $scope.movie_name = "";
    $scope.poster_url = "";
    $scope.vedio_url = "";
    $scope.movir_description = "";


    $scope.addMovie = function (movie_name, poster_url, vedio_url, movir_description) {
        
            var data = {
                movie_name: movie_name,
                img_url: poster_url,
                url: vedio_url,
                title: movir_description, 
                status: 'ok',
            }
            console.log(data);
            // var appoint = localStorage.getItem('api')
            // url_appoint = appoint + 'appointment/add/'
            // $http.post(url_appoint, JSON.stringify(data))
            $http.post("http://bb1e48a6e9de.ngrok.io/movies/add/", JSON.stringify(data))
                .then(function (response) {
                    console.log(response);
                    console.log(response.data);
                    alert(response.data)
                    window.location.href = "/index.html";

                })
        }

    })
    myApp.controller("editController", function ($scope, $http) {
        console.log('SVD')
        $scope.movie_names = "";
        $scope.poster_urls = "";
        $scope.vedio_urls = "";
        $scope.movir_descriptions = "";
    
    
        $scope.editMovie = function (movie_names, poster_urls, vedio_urls, movir_descriptions) {
            
                var data = {
                    movie_name: movie_names,
                    img_url: poster_urls,
                    url: vedio_urls,
                    title: movir_descriptions, 
                    status: 'ok',
                }
                console.log(data);
                // var appoint = localStorage.getItem('api')
                // url_appoint = appoint + 'appointment/add/'
                // $http.post(url_appoint, JSON.stringify(data))
                $http.post("http://bb1e48a6e9de.ngrok.io/movies/edit/", JSON.stringify(data))
                    .then(function (response) {
                        console.log(response);
                        console.log(response.data);
                        alert(response.data)
                        location.reload();
    
                    })
            }
    
        })

    myApp.controller("secondController", function ($scope, $http,$sce) {
        $http.get('http://bb1e48a6e9de.ngrok.io/manager/allmovies/')
        .then(function (response) {
            $scope.employees = response.data;
            console.log($scope.employees)
        })
        $scope.deletData = function () {
    
            var data = {
             movie_id: localStorage.getItem("movieid"), 
         }
         console.log(data)
         $http.post("http://bb1e48a6e9de.ngrok.io/movies/deletMovie/", JSON.stringify(data))
         .then(function (response) {
             console.log(response);
             console.log(response.data);   
                location.reload()
         })
     }
    });
    myApp.controller("commentController", function ($scope, $http) {
        $http.get('http://bb1e48a6e9de.ngrok.io/movies/allcmnts/')
        .then(function (response) {
            $scope.employees = response.data;
            console.log($scope.employees)
        })
        $scope.deletDatas = function () {
    
            var data = {
             cmnt_id: localStorage.getItem("cmntid"), 
         }
         console.log(data)
         $http.post("http://bb1e48a6e9de.ngrok.io/movies/deletCommments/", JSON.stringify(data))
         .then(function (response) {
             console.log(response);
             console.log(response.data);   
                location.reload()
         })
     }
    });
   