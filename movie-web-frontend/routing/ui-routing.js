var myApp = angular.module("myApp", ['ui.router']);
myApp.controller("LoginController", LoginController);

    function LoginController() {
        var login = this;
        // login.submit = function() {
        //     login.completed = true;
        // }
    }
myApp.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('patient-rgister', {
        url: '/first',
        templateUrl:'registration/patient_reg.html',
        controller :'firstController'
    })
    .state('Home', {
        url: '/third',
        templateUrl:'pages/home.html',
        controller :'thirdController'
    })
    .state('Homes', {
        url: '/third',
        templateUrl:'pages/home.html',
        controller :'thirdController'
    })
    .state('patient-login', {
        url: '/fourth',
        templateUrl:'LOGIN/patient.html',
        controller :'fourthController'
    })
    .state('doctor-login', {
        url: '/fifth',
        templateUrl:'LOGIN/doctor-login.html',
        controller :'fifthController'
    })
    .state('manager-login', {
        url: '/sixth',
        templateUrl:'LOGIN/manager-login.html',
        controller :'sixthController'
    })
    .state('doctor-registration', {
        url: '/seventh',
        templateUrl:'/registration/doctor-registration.html',
        controller :'seventhController'
    })
    .state('patient-appoinment', {
        url: '/eight',
        templateUrl:'/pages/appoinment.html',
        controller :'eightController'
    })
    
    .state('root', {
        url: '/',
        templateUrl: "pages/home.html"
    })
    $urlRouterProvider.otherwise('/');

});



myApp.controller('secondController', function($scope) {
    // $scope.a = $stateParams.a,
    // $scope.b = $stateParams.b
})

myApp.controller('thirdController', function($scope) {
    // $scope.a = $stateParams.a,
    // $scope.b = $stateParams.b
})

// --------------------------------------------patient-login------------------------------------------------
    myApp.controller("fourthController", function ($scope, $http) {
        $scope.PatientLoginEmail = "";
        $scope.PatientLoginPaswrd = "";
    
        $scope.submitplogin = function (PatientLoginEmail, PatientLoginPaswrd) {
    
                var data = {
                    mail_id: PatientLoginEmail,
                    password: PatientLoginPaswrd
                }
                console.log(data);
                // var patient_login = localStorage.getItem('api')
                // url_patient_login = patient_login + 'patient/login/'
                // $http.post(url_patient_login, JSON.stringify(data))
                $http.post("http://bb1e48a6e9de.ngrok.io/user/login/", JSON.stringify(data))
                    .then(function (response) {
                        console.log(response);
                        console.log(response.data);
                        var plogindata = JSON.parse(JSON.stringify(response.data));
                        if (plogindata != "Invalid Credentials") {
                        console.log(plogindata);
                        var data = JSON.stringify(plogindata);
                        localStorage.setItem("user_id", data);
                        window.location.href = "/pages/user-dashboard.html";
                        // alert('login successfull')
                        }
                        else {
                            console.log('asd')
                            alert(plogindata);
                        }
                    })
            }
    
        })
// -------------------------------------------------------manager-login----------------------------------------
        myApp.controller("sixthController", function ($scope, $http) {
            
            $scope.mloginEmail = null;
            $scope.mloginpswrd = null;
            
            $scope.mlogin = function (mloginEmail, mloginpswrd) {
                console.log('sac')
                    var data = {
                        mail_id: mloginEmail,
                        password: mloginpswrd
                    }
                    console.log(data);
                    // var manager_login = localStorage.getItem('api')
                    // url_manager_login = manager_login + 'teacher/login/'
                    // $http.post(url_manager_login, JSON.stringify(data))
                    $http.post("http://bb1e48a6e9de.ngrok.io/manager/login/", JSON.stringify(data))
                        .then(function (response) {
                            console.log(response);
                            console.log(response.data);
                            var regdata = JSON.parse(JSON.stringify(response.data));
                            if (regdata != "Invalid Credentials") {
                            console.log(regdata);
                            localStorage.setItem("regdata", regdata);
                            window.location.href = "/pages/patient-dashbord.html";
                            // alert('login successfull')
                            }
                            else {
                                console.log('asd')
                                alert(regdata);
                            }
                        })
                }
        
            })

// -------------------------------------------patient-registration-----------------------------------------
        myApp.controller("firstController", function ($scope, $http) {
            console.log('SVD')
            $scope.pregmail = "";
            $scope.pregmob = "";
            $scope.pregpswrd = "";
            $scope.pregage = "";
            $scope.pregfnam = "";
            $scope.preglnam = "";
            $scope.preggender = "";
            $scope.pregaddress = "";
    
        
            $scope.patientRegisteration = function (pregmail, pregmob, pregpswrd, pregage, pregaddress, preggender, pregfnam, preglnam) {
        
                    var data = {
                        mail_id: pregmail,
                        phone_no: pregmob,
                        password: pregpswrd,
                        age: pregage,
                        Gender: preggender,
                        address: pregaddress,
                        frist_name: pregfnam,
                        last_name: preglnam
                        
                    }
                    console.log(data);
                    // var patient_appoint = localStorage.getItem('api')
                    // url_patient_appoint = patient_appoint + 'patient/register/'
                    // $http.post(url_patient_appoint, JSON.stringify(data))
                    $http.post("http://bb1e48a6e9de.ngrok.io/user/registration/ ", JSON.stringify(data))
                        .then(function (response) {
                            console.log(response);
                            console.log(response.data);
                            alert('successfully Registered')
                            location.reload();

                        })
                }
        
            })
