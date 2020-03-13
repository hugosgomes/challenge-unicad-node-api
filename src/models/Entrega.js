const { Model, DataTypes } = require('sequelize');

class Entrega extends Model {
    static init(sequelize) {
        super.init({
            nome_cliente: DataTypes.STRING,
            ponto_partida: DataTypes.STRING,
            ponto_destino: DataTypes.STRING,
            data_entrega: DataTypes.DATE,
        },
        {
            sequelize
        });
    }
}

module.exports = Entrega;