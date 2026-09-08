import * as PollService from './polls.service.js';
import { ApiError } from '../../utils/ApiError.js';
import { ApiResponse } from '../../utils/ApiResponse.js';

export const createPoll = async (req, res, next) => {
  try {
    // logged in userId
    const userId = req.user?._id;

    if (!userId) {
      throw new ApiError(401, 'You must be logged in to create a poll');
    }

    // Trigger Poll service for create
    const poll = await PollService.createPollService(req.body, userId);

    // Response
    return res.status(201).json(new ApiResponse(201, poll, 'Poll created successfully'));
  } catch (error) {
    next(error);
  }
};

// Get All Polls
export const getMyPolls = async (req, res, next) => {
  try {
    // Get userId
    const userId = req.user?._id;

    if (!userId) {
      throw new ApiError(401, 'Unauthorized access');
    }

    // Get All Polls
    const polls = await PollService.getUserPollsService(userId);

    return res.status(200).json(new ApiResponse(200, polls, 'User polls fetched successfully'));
  } catch (error) {
    next(error);
  }
};

// Get Polls of pollId
export const getPollById = async (req, res, next) => {
  try {
    const { pollId } = req.params;

    const poll = await PollService.getPollByIdService(pollId);

    // Check if poll is expired but still allow viewing
    const isExpired = new Date(poll.expiresAt) < new Date();

    return res
      .status(200)
      .json(new ApiResponse(200, { poll, isExpired }, 'Poll details fetched successfully'));
  } catch (error) {
    next(error);
  }
};

// Update poll controller
export const updatePoll = async (req, res, next) => {
  try {
    const { pollId } = req.params;
    const userId = req.user._id;

    const updatedPoll = await PollService.updatePollService(pollId, userId, req.body);

    return res.status(200).json(new ApiResponse(200, updatedPoll, 'Poll updated successfully'));
  } catch (error) {
    next(error);
  }
};

// Delete poll
export const deletePoll = async (req, res, next) => {
  try {
    const { pollId } = req.params;
    const userId = req.user?._id;

    await PollService.deletePollService(pollId, userId);

    return res.status(200).json(new ApiResponse(200, {}, 'Poll deleted successfully'));
  } catch (error) {
    next(error);
  }
};

// Published Poll
export const publishPoll = async (req, res, next) => {
  try {
    const { pollId } = req.params;
    const userId = req.user._id;

    const poll = await PollService.publishPollService(pollId, userId);

    return res.status(200).json(new ApiResponse(200, poll, 'Poll published successfully'));
  } catch (error) {
    next(error);
  }
};

// Close Poll
export const closePoll = async (req, res, next) => {
  try {
    const { pollId } = req.params;
    const userId = req.user._id;

    const poll = await PollService.closePollService(pollId, userId);

    return res
      .status(200)
      .json(
        new ApiResponse(200, poll, 'Poll closed successfully. No more responses will be accepted.')
      );
  } catch (error) {
    next(error);
  }
};
