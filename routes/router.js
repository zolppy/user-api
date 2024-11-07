import express from 'express'
import useRouter from './userRouter.js'

const router = express.Router()

router.use('/users', useRouter)

export default router
