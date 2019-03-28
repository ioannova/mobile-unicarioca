//Modulo
var imcModulo = angular.module('imcApp', []);

//Controler
imcModulo.controller('imcController', function($scope) {
    
    //Função para calcular o IMC do usuário
    $scope.calcularIMC = function (){
        //Calcular o IMC
        $scope.imc = $scope.peso / ($scope.altura * $scope.altura);
        //Decisão
        if ($scope.imc < 18.5){
            $scope.situacao = 'Abaixo do peso';
        }else if ($scope.imc >= 18.5 && $scope.imc < 30){
            $scope.situacao = 'Peso normal';
        }else if ($scope.imc > 30){
            $scope.situacao = 'Obesidade.';
        }
        $scope.exibeResultados = true;
    }
    
    //Função para esconder os resultados
    $scope.esconderIMC = function (){
        $scope.exibeResultados = false;
    }
    
});