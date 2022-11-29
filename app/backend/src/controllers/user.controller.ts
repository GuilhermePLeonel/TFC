// import { Request, Response } from 'express';
// import UserService from '../services/user.service';
// import { ILogin } from '../interfaces/IUser';

// export default class UserController {
//   public userService = new UserService();

//   async login(req: Request<object, object, ILogin>, res: Response) {
//     const { body } = req;

//     const result = await this.userService.validateLogin(body);
//     if (Object.keys(result).includes('token')) {
//       res.status(200).json(result);
//     }
//     if (Object.values(result)[0].includes('required')) { res.status(400).json(result); }
//     res.status(401).json(result);
//   }

//   async create(req: Request, res: Response) {
//     const user = req.body;

//     await this.userService.create(user);
//     const token = this.userService.generateToken(user);
//     res.status(201).json({ token });
//   }
// }
