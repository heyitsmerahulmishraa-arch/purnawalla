import express from 'express';
import { signup, home, login } from '../controller/auth_controller.js';

const router = express.Router();

router.route("/").get(home)
router.route('/signup').post(signup);
router.route('/login').post(login);

export default router;