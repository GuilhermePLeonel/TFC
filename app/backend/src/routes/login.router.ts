import { Router } from 'express';
import LoginController from '../controllers/login.controller';
// teste

const loginRouter = Router();

const loginController = new LoginController();

loginRouter.get('/validate', (req, res) => loginController.validate(req, res));
loginRouter.post('/', (req, res) => loginController.login(req, res));

export default loginRouter;
