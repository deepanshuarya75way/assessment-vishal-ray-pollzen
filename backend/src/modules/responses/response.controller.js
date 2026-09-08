import * as ResponseService from './response.service.js';
import { ApiResponse } from '../../utils/ApiResponse.js';

export const submitResponse = async (req, res, next) => {
  try {
    const { pollId } = req.params;
    const { answers, anonymousId } = req.body;

    const respondentData = {
      userId: req.user?._id || null,
      anonymousId: anonymousId || null,
    };

    const { response, anonymousId: assignedId } = await ResponseService.submitResponseService(
      pollId,
      respondentData,
      answers
    );

    return res
      .status(201)
      .json(new ApiResponse(201, { response, assignedId }, 'Response submitted successfully'));
  } catch (error) {
    next(error);
  }
};

export const checkVoteStatus = async (req, res, next) => {
  try {
    const { pollId } = req.params;
    const anonymousId = req.query.anonymousId; // For guest users
    const userId = req.user?._id;

    const existingResponse = await ResponseService.checkExistingResponse(
      pollId,
      userId,
      anonymousId
    );

    return res
      .status(200)
      .json(new ApiResponse(200, { hasVoted: !!existingResponse }, 'Status fetched'));
  } catch (error) {
    next(error);
  }
};
