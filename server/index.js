const { startServer } = require('./app')
const { startDatabaseConnection } = require('./database')

function main() {
    startDatabaseConnection()
    startServer()
}

main()