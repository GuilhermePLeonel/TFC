import { Request, Response } from 'express';
import JWT from '../utils/jwt';
import LoginService from '../services/login.service';

export default class LoginController {
  service = new LoginService();
  jwt = new JWT();

  public login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const result = await this.service.post(email, password);
    if (result === 401) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }
    if (result === 400) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }
    if (result === 200) {
      return res.status(200).json({ token: this.jwt.generateToken(req.body) });
    }
  };

  // teste
  public validate = async (req: Request, res: Response) => {
    const { authorization } = req.headers;
    const result = await this.service.role(authorization || '');
    return res.status(200).json({ role: result && result.role });
  };
}
