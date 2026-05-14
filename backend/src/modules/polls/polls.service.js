import { Poll } from './polls.model.js'

// Create Poll
export const createPollService = async (pollData, userId) => {

     // create poll
     const poll = await Poll.create({ ...pollData, createdBy: userId });
     
     // return 
     return poll;
}

// Get All Poll
export const getUserPollsService = async (userId) => {

     return await Poll.find({ createdBy: userId }).sort({ createdAt: -1 });
};

// Get Poll
export const getPollByIdService = async (pollId) => {
     const poll = await Poll.findById(pollId).populate("createdBy", "username name avatar");

     if (!poll) {
          throw new ApiError(404, "Poll not found");
     }

     return poll;
};

// Update poll
export const updatePollService = async (pollId, userId, updateData) => {
     const poll = await Poll.findById(pollId);

     if (!poll) throw new ApiError(404, "Poll not found");

     // Only the creator can update
     if (poll.createdBy.toString() !== userId.toString()) {
          throw new ApiError(403, "You do not have permission to edit this poll");
     }

     // Prevent editing if already published or expired
     if (poll.status === "published" || new Date(poll.expiresAt) < new Date()) {
          throw new ApiError(400, "Cannot edit a published or expired poll");
     }

     return await Poll.findByIdAndUpdate(
          pollId,
          { $set: updateData },
          { new: true, runValidators: true }
     );
};

// Delete poll
export const deletePollService = async (pollId, userId) => {
     const poll = await Poll.findById(pollId);

     if (!poll) {
          throw new ApiError(404, "Poll not found");
     }

     // Authorization check
     if (poll.createdBy.toString() !== userId.toString()) {
          throw new ApiError(403, "Forbidden: You cannot delete someone else's poll");
     }

     return await Poll.findByIdAndDelete(pollId);
};

// Published poll
export const publishPollService = async (pollId, userId) => {
     const poll = await Poll.findById(pollId);

     if (!poll) throw new ApiError(404, "Poll not found");

     if (poll.createdBy.toString() !== userId.toString()) {
          throw new ApiError(403, "Not authorized to publish this poll");
     }

     // Don't publish if it's already published
     if (poll.status === "published") {
          throw new ApiError(400, "Poll is already published");
     }

     poll.status = "published";
     poll.publishedAt = new Date();
     await poll.save();

     return poll;
};

// Close Poll
export const closePollService = async (pollId, userId) => {
     const poll = await Poll.findById(pollId);

     if (!poll) throw new ApiError(404, "Poll not found");

     // Ownership check
     if (poll.createdBy.toString() !== userId.toString()) {
          throw new ApiError(403, "You do not have permission to close this poll");
     }

     // If already expired or published, don't allow "closing"
     if (poll.status === "expired") {
          throw new ApiError(400, "Poll is already closed/expired");
     }

     poll.status = "expired";
     poll.expiresAt = new Date(); 

     await poll.save();
     return poll;
};