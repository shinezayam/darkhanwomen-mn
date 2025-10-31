import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IRegistration extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
  city: string;
  program: string;
  experience?: string;
  motivation: string;
  emergencyContact: string;
  emergencyPhone: string;
  agreeToTerms: boolean;
  agreeToPrivacy: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const RegistrationSchema = new Schema<IRegistration>(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
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
    dateOfBirth: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    program: {
      type: String,
      required: true,
      trim: true,
    },
    experience: {
      type: String,
      trim: true,
      default: undefined,
    },
    motivation: {
      type: String,
      required: true,
      trim: true,
    },
    emergencyContact: {
      type: String,
      required: true,
      trim: true,
    },
    emergencyPhone: {
      type: String,
      required: true,
      trim: true,
    },
    agreeToTerms: {
      type: Boolean,
      required: true,
      default: false,
    },
    agreeToPrivacy: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Registration: Model<IRegistration> =
  mongoose.models.Registration || mongoose.model<IRegistration>('Registration', RegistrationSchema);

export default Registration;

