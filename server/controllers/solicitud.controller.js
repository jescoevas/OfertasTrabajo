const Oferta = require('../models/oferta')
const Demandante = require('../models/demandante')
const Solicitud = require('../models/solicitud')

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