import crypto from "crypto";

import { Response } from "./response.model.js";
import { Poll } from "../polls/polls.model.js";

import { ApiError } from "../../utils/ApiError.js";
import { emitPollUpdate } from "../../utils/socketEmitter.js";

export const checkExistingResponse = async (pollId, userId, anonymousId) => {
     const query = { pollId };

     if (userId) {
          query["respondent.userId"] = userId;
     } else if (anonymousId) {
          query["respondent.anonymousId"] = anonymousId;
     } else {
          return null;
     }

     return await Response.findOne(query).lean();
};


const validateAnswers = (poll, answers) => {

     // Empty Answer
     if (!answers || !Array.isArray(answers) || answers.length === 0) {
          throw new ApiError(400, "Answers are required");
     }

     // Create quick lookup map
     const questionMap = new Map();

     poll.questions.forEach((question) => {
          questionMap.set(question._id.toString(), question);
     });

     // Track answered questions
     const answeredQuestionIds = new Set();

     for (const answer of answers) {
          const { questionId, optionId } = answer;

          // Check question exists
          const question = questionMap.get(questionId);

          if (!question) {
               throw new ApiError(400, "Invalid question selected");
          }

          // Prevent duplicate answers
          if (answeredQuestionIds.has(questionId)) {
               throw new ApiError(400, "Duplicate answers for same question are not allowed" );
          }

          answeredQuestionIds.add(questionId);

          // Check option belongs to question
          const validOption = question.options.some(
               (option) => option._id.toString() === optionId );

          if (!validOption) {
               throw new ApiError(400, "Invalid option selected");
          }
     }

     // Validate required questions
     const requiredQuestions = poll.questions.filter(
          (question) => question.required);

     for (const question of requiredQuestions) {
          if (!answeredQuestionIds.has(question._id.toString())) {
               throw new ApiError( 400, `Required question missing: ${question.questionText}`);
          }
     }
};

// Submit Response
export const submitResponseService = async (pollId, respondentData, answers) => {
     
     // Fetch poll
     const poll = await Poll.findById(pollId);

     if (!poll) {
          throw new ApiError(404, "Poll not found");
     }

     // Check status
     if (poll.status !== "active") {
          throw new ApiError(400, "This poll is no longer accepting responses");
     }

     // Check expiry
     if (poll.expiresAt < new Date()) {
          throw new ApiError(400, "This poll has expired");
     }

     // Validate answers
     validateAnswers(poll, answers);

     // Generate anonymous ID if needed
     let finalAnonymousId = respondentData.anonymousId;

     if (!respondentData.userId && !finalAnonymousId ) {
          finalAnonymousId = `anon_${crypto.randomBytes(8).toString("hex")}`;
     }

     try {
          // Create response
          const response = await Response.create({
               pollId,
               respondent: {
                    userId: respondentData.userId || null,
                    anonymousId: finalAnonymousId || null
               },
               answers
          });

          // Atomic increment
          await Poll.findByIdAndUpdate( pollId, { $inc: { totalResponses: 1 } } );

     
          // Emit realtime update
          emitPollUpdate(pollId, {
               pollId,
               type: "NEW_RESPONSE"
          });

          return {
               response,
               anonymousId: finalAnonymousId
          };

     } catch (error) {

          // Duplicate response handling
          if (error.code === 11000) {
               throw new ApiError(400, "You have already submitted a response" );
          }

          throw error;
     }
};