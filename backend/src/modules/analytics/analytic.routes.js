import { Router } from 'express';
import * as AnalyticsController from './analytic.controller.js';
import { isloggedin } from '../../middleware/auth.middleware.js';

const router = Router();

// Private Route
router.get('/:pollId', isloggedin, AnalyticsController.getPrivateAnalytics);

// Public Route
router.get('/results/:pollId', AnalyticsController.getPublicResults);

export default router;