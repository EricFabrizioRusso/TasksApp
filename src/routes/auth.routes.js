import { Router } from "express";
import {logout, login, register, profile, verifyToken} from '../controllers/auth.controller.js';
import { authRequire } from "../middlewares/validatetoken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema,loginSchema } from "../schemas/auth.schema.js";
const router=Router();


router.post('/register',validateSchema(registerSchema),register);

router.post('/login',validateSchema(loginSchema),login);

router.post('/logout',logout);

router.post('/verify', verifyToken);

router.get('/profile', authRequire, profile);


export default router;