const express = require('express')
const routes = express.Router()
const { solicitudController } = require('../controllers/solicitud.controller')

routes.get('/demandante/:demandanteId/solicitudes', solicitudController.solicitudesByDemandanteId)
routes.post('/solicitud/new', solicitudController.newSolicitud)
routes.get('/solicitud/:id', solicitudController.getById)

module.exports = routes