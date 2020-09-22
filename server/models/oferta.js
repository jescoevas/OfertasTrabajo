const { Schema, model } = require('mongoose')

const ofertaSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    fechaLimite: {
        type: Date,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    requisitos: {
        type: String,
        required: true
    },
    sueldo: {
        type: Number,
        required: true
    },
    empresa: {
        type: Schema.Types.ObjectId,
        ref: 'Empresa'
    }
})

module.exports = model('Oferta', ofertaSchema)