const Empresa = require('../models/empresa')
const Demandante = require('../models/demandante')
const Oferta = require('../models/oferta')

let ofertaController = {}

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

module.exports = { ofertaController }