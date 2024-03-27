import mongoose, { Schema, models } from "mongoose";

const quizSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
  correct_option: {
    type: Object,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Quiz = models.Quiz || mongoose.model("Quiz", quizSchema);

export default Quiz;
