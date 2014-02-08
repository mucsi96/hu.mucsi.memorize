'use strict';

angular.module('mean', ['ngCookies', 'ngResource', 'ngRoute', 'ui.bootstrap', 'ui.route', 'pascalprecht.translate', 'mean.system', 'mean.articles', 'mean.wordsets']);

angular.module('mean.system', []);
angular.module('mean.articles', []);
angular.module('mean.wordsets', []);