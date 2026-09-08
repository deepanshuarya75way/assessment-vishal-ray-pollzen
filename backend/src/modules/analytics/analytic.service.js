import { Response } from '../responses/response.model.js';
import { Poll } from '../polls/polls.model.js';
import { ApiError } from '../../utils/ApiError.js';
import mongoose from 'mongoose';

export const getPollAnalyticsData = async (pollId) => {
  // stats
  const stats = await Response.aggregate([
    { $match: { pollId: new mongoose.Types.ObjectId(pollId) } },
    { $unwind: '$answers' },
    {
      $group: {
        _id: {
          questionId: '$answers.questionId',
          optionId: '$answers.optionId',
        },
        count: { $sum: 1 },
      },
    },
  ]);

  const poll = await Poll.findById(pollId).lean();
  if (!poll) throw new ApiError(404, 'Poll not found');

  const totalResponses = poll.totalResponses || 0;

  const questionsWithAnalytics = poll.questions.map((q) => {
    const optionsWithCounts = q.options.map((opt) => {
      // Find count from aggregation results
      const stat = stats.find((s) => s._id.optionId.toString() === opt._id.toString());
      const count = stat ? stat.count : 0;
      const percentage =
        totalResponses > 0 ? parseFloat(((count / totalResponses) * 100).toFixed(2)) : 0;

      return {
        optionId: opt._id,
        optionText: opt.text,
        count,
        percentage,
      };
    });

    return {
      questionId: q._id,
      questionText: q.questionText,
      required: q.required,
      options: optionsWithCounts,
    };
  });

  return {
    poll: {
      id: poll._id,
      title: poll.title,
      totalResponses,
      status: poll.status,
    },
    questions: questionsWithAnalytics,
  };
};
