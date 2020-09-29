const { Schema, model } = require('mongoose')

const solicitudSchema = new Schema({
    oferta: {
        type: Schema.Types.ObjectId,
        ref: 'Oferta'
    },
    demandante: {
        type: Schema.Types.ObjectId,
        ref: 'Demandante'
    },
    fecha: {
        type: Date,
        required: true
    },
    estado: {
        type: String,
        required: true,
        default: 'PENDIENTE',
        enum: ['PENDIENTE', 'ACEPTADA', 'RECHAZADA']
    }
})

module.exports = model('Solicitud', solicitudSchema)