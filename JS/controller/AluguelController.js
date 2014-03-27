/*
 * Estacionamento Controller
 */
 estacionamentoApp.controller('aluguelController', function($scope) {
 	//It should be coming from a service or DAO
 	$scope.list = [
 		 {id: 1, marca:"Fiat", modelo:"Uno", sexomotorista: "Masculino", placa: "ABC-5550", vaga: "1", horaentrada:"15:00", horasaida: "17:00"},
 		// {id: 2, description:"Coffee", value:1.00},
 		// {id: 3, description:"Desert", value:5.00}
 	];

 	$scope.total = function() {
 		var total = 0;
 		
 		$scope.list.forEach(function(aluguel) {
 			total += aluguel.modelo;
 		});

 		return total;
 	}

 	$scope.addAluguel = function() {
 		var aluguel = {};
 		aluguel.id = 0;
 		aluguel.marca = $scope.marca;
 		aluguel.modelo = $scope.modelo;
 		aluguel.sexomotorista = $scope.sexomotorista;
 		aluguel.placa = $scope.placa;
 		aluguel.vaga = $scope.vaga;
 		aluguel.horaentrada = $scope.horaentrada;
 		aluguel.horasaida = $scope.horasaida;
 		$scope.list.push(aluguel);

 		$scope.marca = $scope.modelo = "";
 	}

 	$scope.editAluguel = function(aluguel){
		$scope.id = aluguel.id;
		$scope.marca = aluguel.marca;
		$scope.modelo = aluguel.modelo;
		$scope.sexomotorista = aluguel.sexomotorista;
		$scope.placa = aluguel.placa;
		$scope.vaga = aluguel.vaga;
		$scope.horaentrada = aluguel.horaentrada;
		$scope.horasaida = aluguel.horasaida;

		
	}
	
	$scope.deleteAluguel = function(aluguel){
		var positionInArray = $scope.getPositionOfElement(aluguel);
		$scope.list.splice(positionInArray, 1);
	}

	$scope.generateId = function(){
		return Math.floor((Math.random()*1000)+1);
	}

	$scope.getElementById = function(id){
		var aluguel = {};
		$scope.list.forEach(function(element, index){
			if(element.id === id){
				aluguel = element;
			}
		});
		return aluguel;
	}

	$scope.getPositionOfElement = function(aluguel){
		var positionInArray = {};
		$scope.list.forEach(function(element, index){
			if(element.id === aluguel.id){
				positionInArray = index;
			}
		});
		return positionInArray;
	}
 });