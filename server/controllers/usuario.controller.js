const Empresa = require('../models/empresa')
const Demandante = require('../models/demandante')
const bcryptjs = require('bcryptjs')

let usuarioController = {}

usuarioController.registro = async(req, resp) => {
    const { tipo } = req.body
    delete req.body.tipo
    if (tipo === 'Empresa') {
        let empresa = new Empresa(req.body)
        const salt = await bcryptjs.genSalt()
        const hashPassword = await bcryptjs.hash(empresa.password, salt)
        empresa.password = hashPassword
        await empresa.save()
        return resp.json({
            success: true,
            empresa
        })
    } else {
        let demandante = new Demandante(req.body)
        const salt = await bcryptjs.genSalt()
        const hashPassword = await bcryptjs.hash(demandante.password, salt)
        demandante.password = hashPassword
        await demandante.save()
        return resp.json({
            success: true,
            demandante
        })
    }
}

usuarioController.login = async(req, resp) => {
    const { tipo, usuario, password } = req.body
    if (tipo === 'Empresa') {
        const empresas = await Empresa.find({ usuario })
        if (empresas.length > 0) {
            const empresa = empresas[0]
            const coincide = await bcryptjs.compare(password, empresa.password)
            if (coincide) {
                return resp.json({
                    message: 'Found',
                    usuario: empresa
                })
            } else {
                return resp.json({
                    message: 'Incorrect password',
                    usuario: {}
                })
            }
        } else {
            return resp.json({
                message: 'Incorrect user',
                usuario: {}
            })
        }
    } else {
        const demandantes = await Demandante.find({ usuario })
        if (demandantes.length > 0) {
            const demandante = demandantes[0]
            const coincide = await bcryptjs.compare(password, demandante.password)
            if (coincide) {
                return resp.json({
                    message: 'Found',
                    usuario: demandante
                })
            } else {
                return resp.json({
                    message: 'Incorrect password',
                    usuario: {}
                })
            }
        } else {
            return resp.json({
                message: 'Incorrect user',
                usuario: {}
            })
        }
    }
}

usuarioController.checkUsuario = async(req, res) => {
    const { usuario, tipo } = req.params
    if (tipo === 'Empresa') {
        const encontrado = await Empresa.find({ usuario })
        return res.json({
            message: true,
            tipo,
            num: encontrado.length
        })
    } else {
        const encontrado = await Demandante.find({ usuario })
        return res.json({
            success: true,
            tipo,
            num: encontrado.length
        })
    }
}

usuarioController.checkEmail = async(req, res) => {
    const { email, tipo } = req.params
    if (tipo === 'Empresa') {
        const encontrado = await Empresa.find({ email })
        return res.json({
            message: true,
            tipo,
            num: encontrado.length
        })
    } else {
        const encontrado = await Demandante.find({ email })
        return res.json({
            success: true,
            tipo,
            num: encontrado.length
        })
    }
}

usuarioController.checkWeb = async(req, res) => {
    const { web } = req.params
    const encontrado = await Empresa.find({ web })
    return res.json({
        message: true,
        num: encontrado.length
    })
}

module.exports = { usuarioController }