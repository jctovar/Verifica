angular.module('app.services', ['ngResource'])
.constant("server_config",{url : "https://galadriel.ired.unam.mx:3005", key : "84656ca7c7ccc6b44523a18b6bdf94140220bfc8"})

.factory('BlankFactory', [function(){

}])

.factory('registros', function($resource, server_config) {
	return $resource(server_config.url + '/students/:id', { id : '@_id' },
    {
        'update': { method:'PUT' }
    });
})

.service('BlankService', [function(){

}]);

