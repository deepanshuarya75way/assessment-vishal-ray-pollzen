import mongoose from "mongoose";

const ResponseSchema = new mongoose.Schema({
     pollId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Poll',
          required: true
     },

     respondent: {
          userId: {
               type: mongoose.Schema.Types.ObjectId,
               ref: "User",
               default: null
          },

          anonymousId: {
               type: String,
               default: null
          }
     },

     answers: [
          {
               questionId: mongoose.Schema.Types.ObjectId,

               optionId: mongoose.Schema.Types.ObjectId
          }
     ]

}, { timestamps: true });

ResponseSchema.index({ pollId: 1 })
ResponseSchema.index(
     {pollId: 1, "respondent.userId": 1  },
     { unique: true, sparse: true }
)
ResponseSchema.index(
     {pollId: 1,"respondent.anonymousId": 1},
     { unique: true, sparse: true }
)


export const Response = mongoose.model('Response', ResponseSchema);