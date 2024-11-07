import dotenv from 'dotenv'
import app from './app.js'
import sequelize from './config/database.js'

dotenv.config()
const PORT = process.env.PORT || 8000

// Conecta e sincroniza o banco de dados
async function connectDatabase() {
  try {
    await sequelize.authenticate()
    console.log('Conexão com o banco de dados estabelecida com sucesso.')

    // Sincroniza modelos com o banco de dados
    await sequelize.sync({ alter: true })
    console.log('Sincronização dos modelos concluída.')
  } catch (error) {
    console.error(
      'Erro ao conectar ou sincronizar o banco de dados:',
      error.message
    )
    process.exit(1) // Encerra o processo se não conseguir conectar
  }
}

// Inicia o servidor
async function startServer() {
  try {
    await connectDatabase()
    app.listen(PORT, () => {
      console.log(`Servidor rodando em: http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error('Erro ao iniciar o servidor:', error.message)
    process.exit(1) // Encerra o processo se não conseguir iniciar o servidor
  }
}

startServer()
