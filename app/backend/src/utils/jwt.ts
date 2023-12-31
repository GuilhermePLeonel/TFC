import * as jwt from 'jsonwebtoken';
import { ILogin } from '../interfaces/ILogin';

require('dotenv/config');

export default class JWT {
  generateToken = (data: ILogin) => {
    const result = jwt.sign(data, process.env.JWT_SECRET || 'jwt_secret');
    return result;
  };

  validate = (token: string): jwt.JwtPayload => {
    try {
      const result = jwt.verify(token, process.env.JWT_SECRET || 'jwt_secret');
      return result as jwt.JwtPayload;
    } catch (error) {
      return { type: 400 };
    }
  };

  validateMatchesToken = (token: string) => {
    const mySecret = process.env.JWT_SECRET || 'my_secret';
    try {
      if (!token) {
        return { status: 401, message: 'Token not found' };
      }
      jwt.verify(token, mySecret);
    } catch (err) {
      return { status: 401, message: 'Token must be a valid token' };
    }
  };
}
