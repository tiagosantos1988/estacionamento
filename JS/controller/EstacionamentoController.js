/*
 * Estacionamento Controller
 */
 estacionamentoApp.controller('estacionamentoController', function($scope) {
 	//It should be coming from a service or DAO
 	$scope.list = [
 		 {id: 1, marca:"Fiat", modelo:"Uno"},
 		// {id: 2, description:"Coffee", value:1.00},
 		// {id: 3, description:"Desert", value:5.00}
 	];

 	$scope.total = function() {
 		var total = 0;
 		
 		$scope.list.forEach(function(carro) {
 			total += carro.modelo;
 		});

 		return total;
 	}

 	$scope.addCarro = function() {
 		var carro = {};
 		carro.id = 0;
 		carro.marca = $scope.marca;
 		carro.modelo = $scope.modelo;
 		
 		$scope.list.push(carro);

 		$scope.marca = $scope.modelo = "";
 	}

	$scope.editCarro = function(carro){
		$scope.id = carro.id;
		$scope.modelo = carro.modelo;
		$scope.marca = carro.marca;
		
	}
	
	$scope.deleteCarro = function(carro){
		var positionInArray = $scope.getPositionOfElement(carro);
		$scope.list.splice(positionInArray, 1);
	}

	$scope.generateId = function(){
		return Math.floor((Math.random()*1000)+1);
	}

	$scope.getElementById = function(id){
		var carro = {};
		$scope.list.forEach(function(element, index){
			if(element.id === id){
				carro = element;
			}
		});
		return carro;
	}

	$scope.getPositionOfElement = function(carro){
		var positionInArray = {};
		$scope.list.forEach(function(element, index){
			if(element.id === carro.id){
				positionInArray = index;
			}
		});
		return positionInArray;
	}


 });