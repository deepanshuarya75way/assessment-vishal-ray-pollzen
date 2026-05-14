import { Router } from 'express';
import * as ResponseController from './response.controller.js';
import { submitResponseSchema } from './response.validation.js';
import  validate  from '../../middleware/validate.middleware.js';
import { isloggedin, optionalAuthenticate } from '../../middleware/auth.middleware.js';

const router = Router();

// POST /responses/:pollId
router.post('/:pollId', optionalAuthenticate, validate(submitResponseSchema), ResponseController.submitResponse);

// GET /responses/status/:pollId
router.get('/status/:pollId', optionalAuthenticate, ResponseController.checkVoteStatus);

export default router;