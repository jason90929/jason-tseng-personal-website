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

app.controller('MainController', ['$scope', '$rootScope', MainController])
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

    .config(['$routeProvider', function($routeProvider, $locationProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home.html',
            controller: 'HomeController'
        }).when('/about', {
            templateUrl: 'about.html',
            controller: 'AboutController'
        }).when('/experience', {
            templateUrl: 'experience.html',
            controller: 'ExperienceController'
        }).when('/skills', {
            templateUrl: 'skills.html',
            controller: 'SkillsController'
        }).when('/education', {
            templateUrl: 'education.html',
            controller: 'EducationController'
        }).when('/employment', {
            templateUrl: 'employment.html',
            controller: 'EmploymentController'
        }).when('/sample', {
            templateUrl: 'sample.html',
            controller: 'SampleController'
        }).when('/contact', {
            templateUrl: 'contact.html',
            controller: 'ContactController'
        }).otherwise({
            redirectTo: '/'
        });
    }]);
