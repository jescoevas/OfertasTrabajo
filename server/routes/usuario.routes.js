const express = require('express')
const routes = express.Router()
const { usuarioController } = require('../controllers/usuario.controller')

routes.post('/registro', usuarioController.registro)
routes.post('/login', usuarioController.login)
routes.get('/registro/checkUsuario/:usuario/:tipo', usuarioController.checkUsuario)
routes.get('/registro/checkEmail/:email/:tipo', usuarioController.checkEmail)
routes.get('/registro/checkWeb/:web', usuarioController.checkWeb)

module.exports = routes