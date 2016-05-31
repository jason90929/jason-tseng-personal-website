var MainController = require('./controllers/MainController');
var HomeController = require('./controllers/HomeController');
var AboutController = require('./controllers/AboutController');
var ExperienceController = require('./controllers/ExperienceController');
var SkillsController = require('./controllers/SkillsController');
var EducationController = require('./controllers/EducationController');
var EmploymentController = require('./controllers/EmploymentController');
var SampleController = require('./controllers/SampleController');
var ContactController = require('./controllers/ContactController');

var app = angular.module('myApp', ['ngRoute', 'ngAnimate']);

app.controller('MainController', ['$scope', '$rootScope', MainController])
    .controller('HomeController', ['$scope', HomeController])
    .controller('AboutController', ['$scope', AboutController])
    .controller('ExperienceController', ['$scope', ExperienceController])
    .controller('SkillsController', ['$scope', SkillsController])
    .controller('EducationController', ['$scope', EducationController])
    .controller('EmploymentController', ['$scope', EmploymentController])
    .controller('SampleController', ['$scope', SampleController])
    .controller('ContactController', ['$scope', ContactController])
    
    .directive('appPart', function() {

        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                scope.contentUrl = attrs.appPart + '.html';
                attrs.$observe("appPart",function(v){
                    scope.contentUrl = v + '.html';
                });
            },
            template: '<div ng-include="contentUrl"></div>'
        };
        
    })

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


