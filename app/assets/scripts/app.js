var MainController = require('./controllers/MainController');
var HomeController = require('./controllers/HomeController');
var AboutController = require('./controllers/AboutController');
var ExperienceController = require('./controllers/ExperienceController');
var SkillsController = require('./controllers/SkillsController');
var EducationController = require('./controllers/EducationController');
var EmploymentController = require('./controllers/EmploymentController');
var SampleController = require('./controllers/SampleController');
var ContactController = require('./controllers/ContactController');

var AppPartDirective = require('./directive/AppPart');

var TelFilter = require('./filter/Tel');

var app = angular.module('myApp', ['ngRoute', 'ngAnimate']);

app.controller('MainController', ['$scope', '$rootScope', '$location', MainController])
    .controller('HomeController', ['$scope', '$rootScope', HomeController])
    .controller('AboutController', ['$scope', '$rootScope', AboutController])
    .controller('ExperienceController', ['$scope', '$rootScope', ExperienceController])
    .controller('SkillsController', ['$scope', '$rootScope', SkillsController])
    .controller('EducationController', ['$scope', '$rootScope', EducationController])
    .controller('EmploymentController', ['$scope', '$rootScope', EmploymentController])
    .controller('SampleController', ['$scope', '$rootScope', SampleController])
    .controller('ContactController', ['$scope', '$rootScope', '$window', ContactController])

    .directive('appPart', AppPartDirective)

    .filter('tel', TelFilter)

    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        // Enable pushState in routes.
        $locationProvider.html5Mode(true).hashPrefix('!');

        $routeProvider.when('/home', {
            templateUrl: 'home.html'
        }).when('/about', {
            templateUrl: 'about.html'
        }).when('/experience', {
            templateUrl: 'experience.html'
        }).when('/skills', {
            templateUrl: 'skills.html'
        }).when('/education', {
            templateUrl: 'education.html'
        }).when('/employment', {
            templateUrl: 'employment.html'
        }).when('/sample', {
            templateUrl: 'sample.html'
        }).when('/contact', {
            templateUrl: 'contact.html'
        }).otherwise({
            redirectTo: '/'
        });


    }]);
