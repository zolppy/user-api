import express from 'express'
import Router from './routes/Router.js'
import dotenv from 'dontenv'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(Router)

app.listen(PORT, () => {
  console.log('Servidor executando em: http://localhost:' + PORT)
})
