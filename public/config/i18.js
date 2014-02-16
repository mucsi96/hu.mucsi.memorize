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
        NEW_WORDSET: 'New Word set',
        NO_WORDSETS: 'You don\'t have any word sets yet. Create one by clicking on "Add" button.',
        ADD: 'Add',
        CONFIRM_DELETE: 'Do you really want to delete this item?',
        DELETE: 'Delete',
        CANCEL: 'Cancel'
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
        WORDSETS: 'Szókészletek',
        NEW_WORDSET: 'Új szókészlet',
        NO_WORDSETS: 'Önnek még nincs szókészlete. Létrehozáshoz, kattintson a "Hozzáadás" gombra.',
        ADD: 'Hozzáadás',
        CONFIRM_DELETE: 'Valóban törölni akarja ezt a elemet?',
        DELETE: 'Törlés',
        CANCEL: 'Mégsem'
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
        WORDSETS: 'Наборы слов',
        NEW_WORDSET: 'Новый набор слов',
        NO_WORDSETS: 'У вас нет группы слов. Создайте его, нажав на кнопку "Добавить".',
        ADD: 'Добавить',
        CONFIRM_DELETE: 'Вы действительно хотите удалить этот элемент?',
        DELETE: 'Удалить',
        CANCEL: 'Отменить'
    });
    $translateProvider.preferredLanguage('en');
    $translateProvider.useCookieStorage();
}]);

