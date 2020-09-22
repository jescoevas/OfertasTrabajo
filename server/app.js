const express = require('express')
const cors = require('cors')

const app = express()

//Settings
app.set('port', process.env.PORT || 3000)

//Middlewares
app.use(express.json())
app.use(cors({ origin: 'http://localhost:4200' }));

//Routes


//Starting
function startServer() {
    app.listen(app.get('port'), () => console.log(`Servidor activo en puerto ${app.get('port')}`))
}

module.exports = {
    startServer
}