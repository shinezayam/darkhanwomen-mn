import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IDonation extends Document {
  amount: number;
  donationType: 'one-time' | 'monthly';
  paymentMethod: 'card' | 'online';
  dedicationType?: 'honor' | 'memory';
  dedicationName?: string;
  createdAt: Date;
  updatedAt: Date;
}

const DonationSchema = new Schema<IDonation>(
  {
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
    donationType: {
      type: String,
      required: true,
      enum: ['one-time', 'monthly'],
    },
    paymentMethod: {
      type: String,
      required: true,
      enum: ['card', 'online'],
    },
    dedicationType: {
      type: String,
      enum: ['honor', 'memory'],
      default: undefined,
    },
    dedicationName: {
      type: String,
      trim: true,
      default: undefined,
    },
  },
  {
    timestamps: true,
  }
);

const Donation: Model<IDonation> =
  mongoose.models.Donation || mongoose.model<IDonation>('Donation', DonationSchema);

export default Donation;

