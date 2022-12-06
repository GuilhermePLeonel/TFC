import bcrypt = require('bcryptjs');
import userModel from '../database/models/users';
import JWT from '../utils/jwt';

export default class LoginService {
  jwt = new JWT();
  constructor(
    private users = userModel,
  ) {}

  public role = async (authorization: string) => {
    const usertoken = this.jwt.validate(authorization);
    const result = await this.users.findOne({ where: { email: usertoken.email } });
    return result;
  };

  public post = async (email: string, password: string) => {
    if (!email || !password) { return 400; }

    const user = await this.users.findOne({ where: { email } });
    const passwordValidation = user && bcrypt.compareSync(password, user.password);
    if (passwordValidation) {
      return 200;
    } return 401;
  };
}
