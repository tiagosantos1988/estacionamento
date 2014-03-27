/*
 * Estacionamento Controller
 */
 estacionamentoApp.controller('clienteController', function($scope) {
 	//It should be coming from a service or DAO
 	$scope.list = [
 		 {id: 1, nome:"Angelica", endereco:"Rua Major Feliciano, 947", telefone:"8804-3330", sexo:"Feminino", idade:"22", marca:"Ford", modelo:"New Fiesta", placa:"QOD:3450"},
 		// {id: 2, description:"Coffee", value:1.00},
 		// {id: 3, description:"Desert", value:5.00}
 	];

 	$scope.total = function() {
 		var total = 0;
 		
 		$scope.list.forEach(function(cliente) {
 			total += cliente.nome;
 		});

 		return total;
 	}



 	 	$scope.addCliente = function() {
 		var cliente = {};
 		cliente.id = 0;
 		cliente.nome = $scope.nome;
 		cliente.endereco = $scope.endereco;
 		cliente.telefone = $scope.telefone;
 		cliente.sexo = $scope.sexo;
 		cliente.idade = $scope.idade;
 		cliente.marca = $scope.marca;
 		cliente.modelo = $scope.modelo;
 		cliente.modelo = $scope.placa;
 		$scope.list.push(cliente);

 		$scope.nome = $scope.sexo = "";
 	}

 	$scope.editCliente = function(cliente){
		$scope.id = cliente.id;
		$scope.nome = cliente.nome;
		$scope.endereco = cliente.endereco;
		$scope.telefone = cliente.telefone;
		$scope.sexo = cliente.sexo;
		$scope.idade = cliente.idade;
		$scope.marca = cliente.marca;
		$scope.modelo = cliente.modelo;
		$scope.placa = cliente.placa;

		
	$scope.deleteCliente = function(cliente){
		var positionInArray = $scope.getPositionOfElement(cliente);
		$scope.list.splice(positionInArray, 1);
	}

	$scope.generateId = function(){
		return Math.floor((Math.random()*1000)+1);
	}

	$scope.getElementById = function(id){
		var cliente = {};
		$scope.list.forEach(function(element, index){
			if(element.id === id){
				cliente = element;
			}
		});
		return cliente;
	}

	$scope.getPositionOfElement = function(cliente){
		var positionInArray = {};
		$scope.list.forEach(function(element, index){
			if(element.id === cliente.id){
				positionInArray = index;
			}
		});
		return positionInArray;

	}
}
 });