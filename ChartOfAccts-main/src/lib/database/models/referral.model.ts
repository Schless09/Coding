import { Schema, model, models } from 'mongoose';

const ReferralSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    linkedinURL: { type: String, required: true },
    email: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
    jobPosting: { type: Schema.Types.ObjectId, ref: 'JobPosting' },
    introducedBy: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Referral = models.Referral || model('Referral', ReferralSchema);

export default Referral;
