const Empresa = require('../models/empresa')
const Demandante = require('../models/demandante')
const Oferta = require('../models/oferta')

let ofertaController = {}

ofertaController.getAllOfertas = async(req, resp) => {
    const ofertas = await Oferta.find()
    return resp.json({
        success: true,
        ofertas
    })
}

ofertaController.ofertasByEmpresaId = async(req, resp) => {
    const { empresaId } = req.params
    const empresa = await Empresa.findById(empresaId)
    const ofertas = await Oferta.find({ empresa })
    return resp.json({
        success: true,
        ofertas
    })
}

ofertaController.newOferta = async(req, resp) => {
    const data = req.body
    const { id } = data
    const empresa = await Empresa.findById(id)
    delete data.id
    data.empresa = empresa
    const oferta = new Oferta(data)
    await oferta.save()
    return resp.json({
        success: true,
        oferta
    })
}

ofertaController.getById = async(req, resp) => {
    const { id } = req.params
    const oferta = await Oferta.findById(id)
    const empresa = await Empresa.findById(oferta.empresa)
    return resp.json({
        success: true,
        oferta,
        empresa
    })
}

module.exports = { ofertaController }