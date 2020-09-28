const express = require('express')
const routes = express.Router()
const { ofertaController } = require('../controllers/oferta.controller')

routes.get('/empresa/:empresaId/ofertas', ofertaController.ofertasByEmpresaId)
routes.post('/oferta/new', ofertaController.newOferta)

module.exports = routes