'use strict';

angular.module('mean').config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('en', {
        SIGNIN: 'Sign in',
        SIGNOUT: 'Sign out',
        LANGUAGE: 'Language',
        ENGLISH: 'English',
        HUNGARIAN: 'Hungarian',
        RUSSIAN: 'Russian',
        OPTIONS: 'Options',
        BACK: 'Back',
        PLEASE_SIGN_IN: 'Please sign in',
        WORDSETS: 'Word sets',
        NO_WORDSETS: 'You don\'t have any word sets yet. Create one by clicking on "Add" button.',
        ADD: 'Add'
    });
    $translateProvider.translations('hu', {
        SIGNIN: 'Belépés',
        SIGNOUT: 'Kilépés',
        LANGUAGE: 'Nyelv',
        ENGLISH: 'Angol',
        HUNGARIAN: 'Magyar',
        RUSSIAN: 'Orosz',
        OPTIONS: 'Beállítások',
        BACK: 'Vissza',
        PLEASE_SIGN_IN: 'Kérem lépjen be',
        WORDSETS: 'Szó készletek',
        NO_WORDSETS: 'Önnek még nincs szókészlete. Létrehozáshoz, kattintson a "Hozzáadás" gombra.',
        ADD: 'Hozzáadás'
    });
    $translateProvider.translations('ru', {
        SIGNIN: 'Войти',
        SIGNOUT: 'Выйти',
        LANGUAGE: 'Язык',
        ENGLISH: 'Aнглийский',
        HUNGARIAN: 'Венгерский',
        RUSSIAN: 'Pусский',
        OPTIONS: 'Опции',
        BACK: 'Назад',
        PLEASE_SIGN_IN: 'Пожалуйста, войдите',
        WORDSETS: 'Группы слов',
        NO_WORDSETS: 'У вас нет группы слов. Создайте его, нажав на кнопку "Добавить".',
        ADD: 'Добавить'
    });
    $translateProvider.preferredLanguage('en');
    $translateProvider.useCookieStorage();
}]);

