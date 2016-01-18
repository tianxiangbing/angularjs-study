var appModule = angular.module('myApp.REST',['ngResource']);
//appModule.factory('CreditCard',['$http',function($http){
//    var baseUrl = 'json/RESTful';
//    return{
//        get:function(cardId){
//            return $http.get(baseUrl+'/'+cardId);
//        },
//        query:function(){
//            return $http.get(baseUrl+'/list');
//        }
//    }
//}]);
appModule.factory('CreditCard',['$resource',function($resource){
    return $resource('json/recipes/:id', {id: '@id'});
}]);