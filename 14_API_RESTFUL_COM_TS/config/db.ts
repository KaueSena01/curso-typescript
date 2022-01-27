import mongoose from 'mongoose'
import config from 'config'
import Logger from './logger'

async function connect() {
    const dbURI = config.get<string>("dbURI")

    try {
        await mongoose.connect(dbURI)
        Logger.info("conectado ao banco de dados!")
    } catch (e) {
        Logger.error("Não foi possível conectar!")
        Logger.error(`Erro: ${e}`)
        process.exit(1)
    }
}

export default connect