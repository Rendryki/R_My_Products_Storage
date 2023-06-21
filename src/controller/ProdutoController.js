const Produto = require('../model/Produto')

module.exports = {
    async getProdutos(req, res){
        const produto = await Produto.findAll()
        return res.json(produto)
    },
    async selectProduto(req, res){
        const {id} = req.params
        const produto = await Produto.findAll({
            where: {
                id: id
            }
        })
        return res.json(produto)
    },
    async createProduto(req, res){
        const {nome_produto, quantidade, valor, created_at, updated_at} = req.body
        const produto = await Produto.create({
            nome_produto, quantidade, valor, created_at, updated_at
        })
        return res.json(produto)
    },
    async deleteProduto(req, res){
        const {id} = req.params
        const produto = await Produto.destroy({
            where: {
                id: id
            }
        })
        return res.json(produto)
    },
    async updatProduto(req, res){
        const {id, nome_produto, quantidade, valor, updated_at} = req.body
        const produto = await Produto.update({
            nome_produto, quantidade, valor, updated_at
        }, {
            where: {
                id: id
            }
        })
        return res.json(produto)
    },
}