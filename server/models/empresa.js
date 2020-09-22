const { Schema, model } = require('mongoose')

const empresaSchema = new Schema({
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
        required: true,
        unique: true
    },
    direccion: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    web: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = model('Empresa', empresaSchema)