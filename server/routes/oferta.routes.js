const express = require('express')
const routes = express.Router()
const { ofertaController } = require('../controllers/oferta.controller')

routes.get('/empresa/:empresaId/ofertas', ofertaController.ofertasByEmpresaId)
routes.post('/oferta/new', ofertaController.newOferta)
routes.get('/oferta/:id', ofertaController.getById)

module.exports = routes