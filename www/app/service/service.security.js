angular.module('AgendaContactos').service('securityService', ['$http', function($http){
    
    this.validateUserAndPassword = function (data) {
      return $http.post('http://localhost/AgendaContactos/www/server.php/identificar', $.param(data));
    };

    // this.getUser = $http.get('http://localhost/cras/www/server.php/obtener_usuarios');
    
}]);