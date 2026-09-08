import mongoose from 'mongoose';

const PollSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: String,

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    responseMode: {
      type: String,
      enum: ['anonymous', 'authenticated'],
      default: 'anonymous',
    },

    status: {
      type: String,
      enum: ['active', 'expired', 'published'],
      default: 'active',
    },

    expiresAt: {
      type: Date,
      required: true,
    },

    publishedAt: Date,

    questions: [
      {
        questionText: { type: String, required: true },
        required: { type: Boolean, default: false },
        options: [{ text: { type: String, required: true } }],
      },
    ],

    totalResponses: { type: Number, default: 0 },
  },
  { timestamps: true }
);

PollSchema.index({ createdBy: 1 });
PollSchema.index({ expiresAt: 1 });
PollSchema.index({ status: 1 });

export const Poll = mongoose.model('Poll', PollSchema);
