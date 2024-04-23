import mongoose, { models } from "mongoose";

const group_identity_schema = new mongoose.Schema({
  LGBT_friendly: {
    type: Boolean,
    default: false,
  },
  Pet_friendly: {
    type: Boolean,
    default: false,
  },

  Student_friendly: {
    type: Boolean,
    default: false,
  },
  Children_friendly: {
    type: Boolean,
    default: false,
  },
  Elderly_friendly: {
    type: Boolean,
    default: false,
  },
  Disabled_friendly: {
    type: Boolean,
    default: false,
  },
});

const basePreferenceSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Student",
      unique: true,
    },
    preference: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    discriminatorKey: "preference",
  }
);

const GroupSchema = new mongoose.Schema({
  group_description: {
    type: String,
    required: true,
  },
  no_of_students: {
    type: Number,
    required: true,
  },

  approximate_age: {
    type: Number,
    required: true,
  },
  group_identity: {
    type: group_identity_schema,
  },
});

const SingleSchema = new mongoose.Schema({
  job_title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  identity: {
    type: group_identity_schema,
  },
});

const FullGroupSchema = new mongoose.Schema({
  group_description: {
    type: String,
    required: true,
  },
  no_of_students: {
    type: Number,
    required: true,
  },

  approximate_age: {
    type: Number,
    required: true,
  },
  group_identity: {
    type: group_identity_schema,
  },
});

const NotRentalSchema = new mongoose.Schema({});

export const Preference =
  models.Preference || mongoose.model("Preference", basePreferenceSchema);

if (!Preference.discriminators) {
  Preference.discriminator("GROUP", GroupSchema);
  Preference.discriminator("SINGLE", SingleSchema);
  Preference.discriminator("FULL_GROUP", FullGroupSchema);
  Preference.discriminator("NOT_RENTAL", NotRentalSchema);
}

export const Group = Preference.discriminators!["GROUP"];
export const Single = Preference.discriminators!["SINGLE"];
export const FullGroup = Preference.discriminators!["FULL_GROUP"];
export const NotRental = Preference.discriminators!["NOT_RENTAL"];
