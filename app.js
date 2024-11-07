import express from 'express'
import dotenv from 'dotenv'
import Router from './routes/Router.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(Router)

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
