import { Router } from 'express';
import MatchesController from '../controllers/matches.controller';
// teste
const matchesRouter = Router();

const matchesController = new MatchesController();

matchesRouter.get('/', (req, res) => matchesController.AllMatches(req, res));
matchesRouter.post('/', (req, res) => matchesController.matchesSave(req, res));
matchesRouter.patch('/:id/finish', (req, res) => matchesController.matchUpdate(req, res));
matchesRouter.patch('/:id', (req, res) => matchesController.resultUpdate(req, res));

export default matchesRouter;
