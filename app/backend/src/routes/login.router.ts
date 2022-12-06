import { Router } from 'express';
import LoginController from '../controllers/login.controller';

const router = Router();

const loginController = new LoginController();

router.get('/validate', (req, res) => loginController.validate(req, res));
router.post('/', (req, res) => loginController.login(req, res));

export default router;
