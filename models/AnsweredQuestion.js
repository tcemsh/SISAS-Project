import mongoose from "mongoose";
const { Schema, model } = mongoose;

const AnsweredQuestionSchema = new Schema({
    question: {
        type: String,
        require: true
    },
    answer: {
        type: String,
        require: true
    }
}, {
    timestamps: { updatedAt: false }
});

export const AnsweredQuestion = model("AnsweredQuestion", AnsweredQuestionSchema);