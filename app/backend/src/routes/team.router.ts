import { Router } from 'express';
import TeamController from '../controllers/team.controller';
// teste

const teamRouter = Router();

teamRouter.get('/', (req, res) => TeamController.allTeams(req, res));
teamRouter.get('/:id', (req, res) => TeamController.teamById(req, res));

export default teamRouter;
