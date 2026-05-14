import mongoose from "mongoose"

const AnalyticsSchema = new mongoose.Schema({

     pollId: ObjectId,

     questionId: ObjectId,

     optionId: ObjectId,

     count: Number

})

export const Analytic = mongoose.model('Analytic', AnalyticsSchema);