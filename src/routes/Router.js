import express from 'express'
import UseRouter from './User/UserRouter.js'

const Router = express.Router()

Router.use('/users', UseRouter)

export default Router
