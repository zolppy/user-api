import express from 'express'
import Router from './routes/Router.js'

const app = express()
const PORT = 8000

app.use(express.json())
app.use(Router)

app.listen(PORT, () => {
  console.log('Servidor executando em: http://localhost:' + PORT)
})
