import mongoose, { Schema, models } from "mongoose";

const resultSchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  scores: {
    type: [Number],
    required: true,
  },
  best_score: Number,
  worst_score: Number,
  average_score: Number,
  total_score: Number,
  no_of_trails: Number,
});

const studentSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      default: "",
    },
    email_verified: {
      type: Boolean,
      default: false,
    },
    results: {
      //catefory and score
      type: [resultSchema],

      default: [
        {
          category: "appliances",
          scores: [],
          best_score: 0,
          worst_score: 0,
          average_score: 0,
          total_score: 0,
          no_of_trails: 0,
        },
        {
          category: "how-to-clean",
          scores: [],
          best_score: 0,
          worst_score: 0,
          average_score: 0,
          total_score: 0,
          no_of_trails: 0,
        },
        {
          category: "credit_scores_and_references",
          scores: [],
          best_score: 0,
          worst_score: 0,
          average_score: 0,
          total_score: 0,
          no_of_trails: 0,
        },
        {
          category: "pest_control",
          scores: [],
          best_score: 0,
          worst_score: 0,
          average_score: 0,
          total_score: 0,
          no_of_trails: 0,
        },
        {
          category: "neighbor_management",
          scores: [],
          best_score: 0,
          worst_score: 0,
          average_score: 0,
          total_score: 0,
          no_of_trails: 0,
        },
        {
          category: "house_maintainance",
          scores: [],
          best_score: 0,
          worst_score: 0,
          average_score: 0,
          total_score: 0,
          no_of_trails: 0,
        },
      ],
    },

    password_reset_token: {
      type: String,
      default: null,
    },
    password_reset_token_expiry: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Student = models.Student || mongoose.model("Student", studentSchema);

export default Student;
