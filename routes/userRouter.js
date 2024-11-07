import express from 'express'
import UserController from '../controllers/UserController.js'

const useRouter = express.Router()

useRouter.post('/', UserController.create)
useRouter.get('/', UserController.findAll)
useRouter.get('/:id', UserController.findById)
useRouter.put('/:id', UserController.update)
useRouter.delete('/:id', UserController.delete)

export default useRouter
