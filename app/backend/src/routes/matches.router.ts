import { Router } from 'express';
import MatchesController from '../controllers/matches.controller';
// teste
const router = Router();

const matchesController = new MatchesController();

router.get('/', (req, res) => matchesController.AllMatches(req, res));
router.post('/', (req, res) => matchesController.matchesSave(req, res));
router.patch('/:id/finish', (req, res) => matchesController.matchUpdate(req, res));
router.patch('/:id', (req, res) => matchesController.resultUpdate(req, res));

export default router;
