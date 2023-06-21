const {Model, DataTypes} = require('sequelize')

class Produto extends Model {
    static init(sequelize){
        super.init({
            nome_produto: DataTypes.STRING,
            quantidade: DataTypes.INTEGER,
            valor: DataTypes.FLOAT,
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE
        }, {
            sequelize
        })
    }
}

module.exports = Produto