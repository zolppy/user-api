import express from 'express'
import UserController from '../controllers/UserController.js'

const UseRouter = express.Router()

UseRouter.post('/', UserController.create)
UseRouter.get('/', UserController.findAll)
UseRouter.get('/:id', UserController.findById)
UseRouter.put('/:id', UserController.update)
UseRouter.delete('/:id', UserController.delete)

export default UseRouter
