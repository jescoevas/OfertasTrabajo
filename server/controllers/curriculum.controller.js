const Curriculum = require('../models/curriculum')
const Demandante = require('../models/demandante')

let curriculumController = {}

curriculumController.getByDemandanteId = async(req, resp) => {
    const { id } = req.params
    const demandante = await Demandante.findById(id)
    const curriculum = await Curriculum.find({ demandante })
    return resp.json({
        success: true,
        curriculum: curriculum[0]
    })
}

module.exports = { curriculumController }