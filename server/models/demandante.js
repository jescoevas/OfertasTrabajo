const { Schema, model } = require('mongoose')

const demandanteSchema = new Schema({
    usuario: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    fechaNacimiento: {
        type: Date,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    direccion: {
        type: String,
        required: true
    },
    foto: {
        type: String
    }
})

module.exports = model('Demandante', demandanteSchema)