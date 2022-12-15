import { Router } from 'express';
import TeamController from '../controllers/team.controller';
// teste

const router = Router();

router.get('/', (req, res) => TeamController.allTeams(req, res));
router.get('/:id', (req, res) => TeamController.teamById(req, res));

export default router;
