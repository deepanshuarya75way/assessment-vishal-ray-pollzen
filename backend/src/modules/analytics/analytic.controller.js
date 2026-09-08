import * as AnalyticsService from './analytic.service.js';
import { Poll } from '../polls/polls.model.js';
import { ApiResponse } from '../../utils/ApiResponse.js';
import { ApiError } from '../../utils/ApiError.js';

//
export const getPrivateAnalytics = async (req, res, next) => {
  try {
    const { pollId } = req.params;
    const userId = req.user._id;

    const poll = await Poll.findById(pollId);
    if (!poll) throw new ApiError(404, 'Poll not found');

    // Auth Check: Only creator
    if (poll.createdBy.toString() !== userId.toString()) {
      throw new ApiError(403, 'Access denied. Only the creator can view detailed analytics.');
    }

    const data = await AnalyticsService.getPollAnalyticsData(pollId);
    return res.status(200).json(new ApiResponse(200, data, 'Analytics fetched'));
  } catch (error) {
    next(error);
  }
};

export const getPublicResults = async (req, res, next) => {
  try {
    const { pollId } = req.params;

    const poll = await Poll.findById(pollId);
    if (!poll) throw new ApiError(404, 'Poll not found');

    // Check if poll is published
    if (poll.status !== 'published') {
      throw new ApiError(
        403,
        'Results are not public yet. The creator must publish the poll first.'
      );
    }

    const data = await AnalyticsService.getPollAnalyticsData(pollId);
    return res.status(200).json(new ApiResponse(200, data, 'Public results fetched'));
  } catch (error) {
    next(error);
  }
};
