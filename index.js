import dotenv from 'dotenv'
import app from './app.js'

dotenv.config()
const PORT = process.env.PORT || 8000

const start = () => {
  try {
    app.listen(PORT, () => {
      console.log('Servidor executando em: http://localhost:' + PORT)
    })
  } catch (error) {
    throw new Error(error)
  }
}

start()
