const express = require('express')
const ProdutoController = require('./controller/ProdutoController')

const routes = express.Router()

routes.get('/', (req, res) => {res.send('Bem vindo!')})

routes.get('/produto', ProdutoController.getProdutos)
routes.get('/produto/:id', ProdutoController.selectProduto)
routes.post('/produto', ProdutoController.createProduto)
routes.delete('/produto/:id', ProdutoController.deleteProduto)
routes.put('/produto', ProdutoController.updatProduto)

module.exports = routes