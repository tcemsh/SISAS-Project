import { UnansweredQuestion } from "../models/UnansweredQuestion.js"
import { AnsweredQuestion } from "../models/AnsweredQuestion.js"

export const receiveQuestiosn = async (req, res) => {
    try {
        const question = await AnsweredQuestion.findOne({ question: req.body.question });

        if (!question) {
            const unansweredQuestion = new UnansweredQuestion(req.body);

            unansweredQuestion.save();

            console.log(unansweredQuestion);

            return res.json({ msg: "No se pudo dar una respuesta, pregunta añadida a la base de datos" });
        }

        console.log(question);

        return res.json({ msg: "La pregunta esta en la base de datos", answer: question.answer });
    } catch (error) {
        return res.json({ error: error.message })
    }
}