'use strict';

angular.module('mean').config(['$translateProvider'], function ($translateProvider) {
    $translateProvider.translations('en', {
        Signin: 'Signin',
        Signout: 'Signout',
        Language: 'Language',
        English: 'English',
        Hungarian: 'Hungarian'
    });
    $translateProvider.translations('hu', {
        Signin: 'Signin1',
        Signout: 'Signout1',
        Language: 'Language1',
        English: 'English1',
        Hungarian: 'Hungarian1'
    });
    $translateProvider.preferredLanguage('en');
});

