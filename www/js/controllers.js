angular.module('app.controllers', [])
  
.controller('listadoCtrl', function($scope, registros) {
    $scope.data = {};

    $scope.doRefresh = function() {
        var query = registros.get(function() {
            $scope.items = query.students;
        });
        $scope.$broadcast('scroll.refreshComplete');
    };

    $scope.clear = function() {
        $scope.data.searchQuery = '';
    }
  
    var query = registros.get(function() {
        $scope.items = query.students;
    });
})
   
.controller('leerCodigoCtrl', function($scope, $cordovaBarcodeScanner) {
    // funcion de inicar el scanner de codigos
	$scope.scanBarcode = function() {
        $cordovaBarcodeScanner
        .scan()
        .then(function(imageData) {
            console.log("Barcode Text -> " + imageData.text);
            console.log("Barcode Format -> " + imageData.format);
            console.log("Cancelled -> " + imageData.cancelled);
            //searchProduct(imageData.text);
        }, function(error) {
            console.log("An error happened -> " + error);
        });
    }

})
   
.controller('configuraciNCtrl', function($scope) {

})
      
.controller('detalleCtrl', function($scope, $stateParams, registros) {
    console.log($stateParams.itemId);

    var query = registros.get({ id: $stateParams.itemId }, function() {
        $scope.item = query.students[0];
    });
})
   
.controller('creditosCtrl', function($scope) {

})
 