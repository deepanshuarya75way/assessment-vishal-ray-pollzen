import { Router } from "express";
import { registerUser, loginUser , me} from "./auth.controller.js";
import validate from "../../middleware/validate.middleware.js";
import { isloggedin } from '../../middleware/auth.middleware.js'
import { registerSchema, loginSchema } from "./auth.validation.js";

const router = Router();

// register 
router.post("/register", validate(registerSchema), registerUser);

// login
router.post("/login", validate(loginSchema), loginUser);

// me
router.get('/me', isloggedin, me)

export default router;