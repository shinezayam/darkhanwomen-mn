import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IVolunteer extends Document {
  name: string;
  email: string;
  phone: string;
  address?: string;
  volunteerType: 'training-support' | 'event-management' | 'communication-outreach';
  availability?: 'weekdays' | 'weekends' | 'flexible';
  experience?: string;
  motivation?: string;
  createdAt: Date;
  updatedAt: Date;
}

const VolunteerSchema = new Schema<IVolunteer>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
      default: undefined,
    },
    volunteerType: {
      type: String,
      required: true,
      enum: ['training-support', 'event-management', 'communication-outreach'],
    },
    availability: {
      type: String,
      enum: ['weekdays', 'weekends', 'flexible'],
      default: undefined,
    },
    experience: {
      type: String,
      trim: true,
      default: undefined,
    },
    motivation: {
      type: String,
      trim: true,
      default: undefined,
    },
  },
  {
    timestamps: true,
  }
);

const Volunteer: Model<IVolunteer> =
  mongoose.models.Volunteer || mongoose.model<IVolunteer>('Volunteer', VolunteerSchema);

export default Volunteer;

