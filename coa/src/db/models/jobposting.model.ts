import { Schema, model, models } from 'mongoose';

const JobPostingSchema = new Schema({
    company: { type: String, required: true },
    companyWebsite: { type: String, required: true },
    companySize: { type: Number, required: true },
    companyIndustry: { type: String, required: true },
    companyLinkedin: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    targetCompensation: { type: Number, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
    referrals: [{ type: Schema.Types.ObjectId, ref: 'Referral' }],
    introducedBy: { type: Schema.Types.ObjectId, ref: 'User' },
});

const JobPosting = models.JobPosting || model('JobPosting', JobPostingSchema);

export default JobPosting;
