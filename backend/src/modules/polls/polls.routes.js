import { Router } from 'express';
import * as PollController from './polls.controller.js';
import { createPollSchema } from './polls.validation.js';
import  validate from '../../middleware/validate.middleware.js';
import { isloggedin} from '../../middleware/auth.middleware.js';     

const router = Router();

// POST /create
router.post('/create', isloggedin, validate(createPollSchema), PollController.createPoll);

// GET /my
router.get('/my', isloggedin, PollController.getMyPolls);

// GET /:pollId
router.get('/:pollId', PollController.getPollById);

// PATCH /:pollId
router.patch('/:pollId', isloggedin, PollController.updatePoll);

// DELETE /:pollId
router.delete('/:pollId', isloggedin, PollController.deletePoll);

// PATCH /:pollId/publish
router.patch('/:pollId/publish', isloggedin, PollController.publishPoll);

// PATCH /:pollId/close
router.patch('/:pollId/close', isloggedin, PollController.closePoll);


export default router;