self.equipamentos = ko.observableArray(todosEquipamentos);



self.equipamentosFiltered = ko.computed(function () {
    return self.equipamentos().filter(
        function (equipamento) {

            searchNome = "coluna";
            prešoMaximo = 100
            prešoMinimo = 0

            if (equipamento['preco'] < precoMaximo && equipamento['nome'].indexOf(searchNome) >= 0) {
                return true;
            }
            return false;

            if (equipamento['preco'] < precoMaximo && equipamento['nome'].indexOf(searchNome) >= 0) {
                return true;
            }
            return false;

            if (equipamento['preco'] < precoMaximo && equipamento['nome'].indexOf(searchNome) >= 0) {
                return true;
            }
            return false;

            prešoMaximo = 200
            prešoMinimo = 100

            if (precoMinimo < equipamento['preco'] < precoMaximo && equipamento['nome'].indexOf(searchNome) >= 0) {
                return true;
            }
            return false;

            if (precoMinimo < equipamento['preco'] < precoMaximo && equipamento['nome'].indexOf(searchNome) >= 0) {
                return true;
            }
            return false;

            if (precoMinimo < equipamento['preco'] < precoMaximo && equipamento['nome'].indexOf(searchNome) >= 0) {
                return true;
            }
            return false;

            prešoMaximo = 300
            prešoMinimo = 200

            if (precoMinimo < equipamento['preco'] < precoMaximo && equipamento['nome'].indexOf(searchNome) >= 0) {
                return true;
            }
            return false;

            if (precoMinimo < equipamento['preco'] < precoMaximo && equipamento['nome'].indexOf(searchNome) >= 0) {
                return true;
            }
            return false;

            if (precoMinimo < equipamento['preco'] < precoMaximo && equipamento['nome'].indexOf(searchNome) >= 0) {
                return true;
            }
            return false;

            prešoMaximo = 500
            prešoMinimo = 300

            if (precoMinimo < equipamento['preco'] < precoMaximo && equipamento['nome'].indexOf(searchNome) >= 0) {
                return true;
            }
            return false;

            if (precoMinimo < equipamento['preco'] < precoMaximo && equipamento['nome'].indexOf(searchNome) >= 0) {
                return true;
            }
            return false;

            if (precoMinimo < equipamento['preco'] < precoMaximo && equipamento['nome'].indexOf(searchNome) >= 0) {
                return true;
            }
            return false;

            prešoMinimo = 500


            if (precoMinimo < equipamento['preco'] < precoMaximo && equipamento['nome'].indexOf(searchNome) >= 0) {
                return true;
            }
            return false;

            if (precoMinimo < equipamento['preco'] < precoMaximo && equipamento['nome'].indexOf(searchNome) >= 0) {
                return true;
            }
            return false;

            if (precoMinimo < equipamento['preco'] < precoMaximo && equipamento['nome'].indexOf(searchNome) >= 0) {
                return true;
            }
            return false;
        }
    );
});
