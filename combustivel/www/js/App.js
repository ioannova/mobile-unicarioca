//Modulo
var imcModulo = angular.module('imcApp', []);

//Controler
imcModulo.controller('imcController', function ($scope) {

    //Função para calcular o IMC do usuário
    $scope.calcularPreco = function () {
        //Calcular o IMC
        $scope.setenta = ($scope.gasolina * 70) / 100;
        //Decisão
        if ($scope.alcool > $scope.setenta) {
            $scope.custo = $scope.gasolina;
            $combustivel = 'Gasolina R$';
            $scope.situacao = 'É melhor abastecer com gasolina';
        } else if ($scope.alcool < $scope.setenta) {
            $scope.custo = $scope.alcool;
            $scope.combustivel = 'Álcool R$'
            $scope.situacao = 'É melhor abastecer com álcool';
        } else if ($scope.gasolina == $scope.setenta) {
            $scope.situacao = 'Você terá o mesmo rendimento abastecendo com álcool ou com gasolina';
        }
        $scope.exibeResultados = true;
    }

    //Função para esconder os resultados
    $scope.esconderPreco = function () {
        $scope.exibeResultados = false;
    }

});