angular.module('primeiraApp').constant('consts', {
    appName: 'MEAN - Primeira Aplicação',
    version: '1.0',
    owner: 'João Ré',
    year: '2020',
    site: 'http://google.com.br',
    apiUrl: 'https://heroku-primeiraapp-backend.herokuapp.com/api',
    oapiUrl: 'https://heroku-primeiraapp-backend.herokuapp.com/oapi',
    userKey: '_primeira_app_user'
}).run(['$rootScope', 'consts', function($rootScope, consts){
    $rootScope.consts = consts
}])