import express from 'express';
const router= express.Router()
import {authMiddleware} from '../middleware/auth-middleware.js'
import {createUser, loginUserCtrl, deletaUser, updatedUser} from '../controllers/user.controller.js'


router.post('/register',createUser)
router.post('/login', authMiddleware, loginUserCtrl)

router.delete('/:id',deletaUser)
router.put('/:id',updatedUser)
export default router;