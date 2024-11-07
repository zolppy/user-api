import express from 'express'
import Router from './routes/Router.js'

const app = express()

app.use(express.json())
app.use(Router)

export default app
