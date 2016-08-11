let MainController = require('./controllers/MainController');
let ExperienceController = require('./controllers/ExperienceController');
let SkillsController = require('./controllers/SkillsController');
let EducationController = require('./controllers/EducationController');
let EmploymentController = require('./controllers/EmploymentController');
let PortfolioController = require('./controllers/PortfolioController');
let ContactController = require('./controllers/ContactController');

let AppPartDirective = require('./directive/AppPart');

let TelFilter = require('./filter/Tel');

let app = angular.module('myApp', ['duScroll']);

app.controller('MainController', ['$scope', MainController])
    .controller('ExperienceController', ['$scope', '$rootScope', ExperienceController])
    .controller('SkillsController', ['$scope', '$rootScope', SkillsController])
    .controller('EducationController', ['$scope', '$rootScope', EducationController])
    .controller('EmploymentController', ['$scope', '$rootScope', EmploymentController])
    .controller('PortfolioController', ['$scope', '$rootScope', PortfolioController])
    .controller('ContactController', ['$scope', '$rootScope', '$window', ContactController])

    .directive('appPart', AppPartDirective)

    .filter('tel', TelFilter);
