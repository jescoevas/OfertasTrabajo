const { Schema, model } = require('mongoose')

const curriculumSchema = new Schema({

    demandante: {
        type: Schema.Types.ObjectId,
        ref: 'Demandante'
    },
    descripcion: {
        type: String
    },
    formacionAcademica: [{
        type: String
    }],
    formacionComplementaria: [{
        type: String
    }],
    experiencia: [{
        type: String
    }],
    competencias: [{
        type: String
    }],

})

module.exports = model('Curriculum', curriculumSchema)