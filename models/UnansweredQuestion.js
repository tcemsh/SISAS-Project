import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UnansweredQuestionSchema = new Schema({
    question: {
        type: String,
        require: true
    }
}, {
    timestamps: { updatedAt: false }
});

export const UnansweredQuestion = model("UnansweredQuestion", UnansweredQuestionSchema);