import mongoose from 'mongoose';

const { Schema } = mongoose;

const AnalyticsSchema = new Schema({
  pollId: Schema.Types.ObjectId,

  questionId: Schema.Types.ObjectId,

  optionId: Schema.Types.ObjectId,

  count: Number,
});

export const Analytic = mongoose.model('Analytic', AnalyticsSchema);
