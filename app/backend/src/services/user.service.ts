// import Joi from 'joi';
// import jsonwebtoken from 'jsonwebtoken';
// import { IUser } from '../interfaces/IUser';
// import UserModel from '../database/models/users';

// export default class UserService {
//   public user = new UserModel(); // atributo

//   public jwt = jsonwebtoken;

//   public generateToken(user: IUser) {
//     const payload = {
//       username: user.username,
//       classe: user.classe,
//       level: user.level,
//       password: user.password,
//     };
//     return this.jwt.sign(payload, 'secret' as string, {
//       algorithm: 'HS256', expiresIn: '1d' });
//   }

//   public generateLoginToken(login: IUser) {
//     const payload = {
//       username: login.username,
//       password: login.password,
//     };
//     return this.jwt.sign(payload, 'secret' as string, {
//       algorithm: 'HS256', expiresIn: '1d' });
//   }

//   public validateLogin = async (loginBody: ILogin) => {
//     const user = await this.user.getUserByNameAndEmail(loginBody);
//     if (user.length === 0) {
//       return { message: 'Username or password invalid' };
//     }
//     if (typeof user === 'number') {
//       return { message: 'Username or password invalid' };
//     }
//     const schema = Joi.object({
//       username: Joi.string().required(),
//       password: Joi.string().required(),
//     });

//     const { error, value } = schema.validate(loginBody);

//     if (error) {
//       return { message: error.message };
//     }
//     const token = await this.generateLoginToken(value);
//     return { token };
//   };

//   public create(userData: IUser): Promise<IUser> {
//     return this.user.create(userData);
//   }
// }
