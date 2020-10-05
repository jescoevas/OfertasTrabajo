const Oferta = require('../models/oferta')
const Demandante = require('../models/demandante')
const Solicitud = require('../models/solicitud')
const Empresa = require('../models/empresa')

let solicitudController = {}


solicitudController.solicitudesByDemandanteId = async(req, resp) => {
    const { demandanteId } = req.params
    const demandante = await Demandante.findById(demandanteId)
    const solicitudes = await Solicitud.find({ demandante })
    return resp.json({
        success: true,
        solicitudes
    })
}

solicitudController.solicitudesByEmpresaId = async(req, resp) => {
    const { empresaId } = req.params
    const empresa = await Empresa.findById(empresaId)
    const ofertas = await Oferta.find({ empresa })
    let solicitudes = []

    for (let i = 0; i < ofertas.length; i++) {
        const oferta = ofertas[i];
        const sols = await solicitudesByOferta(oferta)
        if (sols.length > 0) {
            sols.forEach(sol => solicitudes.push(sol))
        }
    }

    return resp.json({
        success: true,
        solicitudes
    })
}

solicitudesByOferta = async(oferta) => {
    const res = await Solicitud.find({ oferta })
    return res
}

solicitudController.newSolicitud = async(req, resp) => {
    const { ofertaId, demandanteId, fecha } = req.body
    const oferta = await Oferta.findById(ofertaId)
    const demandante = await Demandante.findById(demandanteId)
    const data = { oferta, demandante, fecha }
    const solicitud = new Solicitud(data)
    console.log(solicitud)
    await solicitud.save()
    return resp.json({
        success: true,
        solicitud
    })
}

solicitudController.getById = async(req, resp) => {
    const { id } = req.params
    const solicitud = await Solicitud.findById(id)
    return resp.json({
        success: true,
        solicitud
    })
}

module.exports = { solicitudController }