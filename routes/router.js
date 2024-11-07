import express from 'express'
import UseRouter from './userRouter.js'

const Router = express.Router()

Router.use('/users', UseRouter)

export default Router
