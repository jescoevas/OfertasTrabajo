const express = require('express')
const routes = express.Router()
const { curriculumController } = require('../controllers/curriculum.controller')

routes.get('/demandante/:id/curriculum', curriculumController.getByDemandanteId)

module.exports = routes