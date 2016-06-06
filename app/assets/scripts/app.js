var MainController = require('./controllers/MainController');
var ExperienceController = require('./controllers/ExperienceController');
var SkillsController = require('./controllers/SkillsController');
var EducationController = require('./controllers/EducationController');
var EmploymentController = require('./controllers/EmploymentController');
var SampleController = require('./controllers/SampleController');
var ContactController = require('./controllers/ContactController');

var AppPartDirective = require('./directive/AppPart');

var TelFilter = require('./filter/Tel');

var app = angular.module('myApp', []);

app.controller('MainController', ['$scope', '$rootScope', '$location', MainController])
    .controller('ExperienceController', ['$scope', '$rootScope', ExperienceController])
    .controller('SkillsController', ['$scope', '$rootScope', SkillsController])
    .controller('EducationController', ['$scope', '$rootScope', EducationController])
    .controller('EmploymentController', ['$scope', '$rootScope', EmploymentController])
    .controller('SampleController', ['$scope', '$rootScope', SampleController])
    .controller('ContactController', ['$scope', '$rootScope', '$window', ContactController])

    .directive('appPart', AppPartDirective)

    .filter('tel', TelFilter);