import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IPartner extends Document {
  organizationName: string;
  logoUrl?: string;
  activityDirection: string;
  managementName: string;
  womenCouncilChairman: string;
  position: string;
  yearsWorked: number;
  womenCouncilGoal: string;
  womenCouncilMembers: string;
  phone: string;
  address: string;
  totalEmployees?: number;
  totalFemale?: number;
  totalMale?: number;
  managementFemale?: number;
  managementMale?: number;
  householdHeadsFemale?: number;
  householdHeadsMale?: number;
  disabledFemale?: number;
  disabledMale?: number;
  collaborationProposal?: string;
  supportProposal?: string;
  createdAt: Date;
  updatedAt: Date;
}

const PartnerSchema = new Schema<IPartner>(
  {
    organizationName: {
      type: String,
      required: true,
      trim: true,
    },
    logoUrl: {
      type: String,
      default: undefined,
    },
    activityDirection: {
      type: String,
      required: true,
      trim: true,
    },
    managementName: {
      type: String,
      required: true,
      trim: true,
    },
    womenCouncilChairman: {
      type: String,
      required: true,
      trim: true,
    },
    position: {
      type: String,
      required: true,
      trim: true,
    },
    yearsWorked: {
      type: Number,
      required: true,
      min: 0,
    },
    womenCouncilGoal: {
      type: String,
      required: true,
      trim: true,
    },
    womenCouncilMembers: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    totalEmployees: {
      type: Number,
      min: 0,
      default: undefined,
    },
    totalFemale: {
      type: Number,
      min: 0,
      default: undefined,
    },
    totalMale: {
      type: Number,
      min: 0,
      default: undefined,
    },
    managementFemale: {
      type: Number,
      min: 0,
      default: undefined,
    },
    managementMale: {
      type: Number,
      min: 0,
      default: undefined,
    },
    householdHeadsFemale: {
      type: Number,
      min: 0,
      default: undefined,
    },
    householdHeadsMale: {
      type: Number,
      min: 0,
      default: undefined,
    },
    disabledFemale: {
      type: Number,
      min: 0,
      default: undefined,
    },
    disabledMale: {
      type: Number,
      min: 0,
      default: undefined,
    },
    collaborationProposal: {
      type: String,
      trim: true,
      default: undefined,
    },
    supportProposal: {
      type: String,
      trim: true,
      default: undefined,
    },
  },
  {
    timestamps: true,
  }
);

const Partner: Model<IPartner> =
  mongoose.models.Partner || mongoose.model<IPartner>('Partner', PartnerSchema);

export default Partner;

