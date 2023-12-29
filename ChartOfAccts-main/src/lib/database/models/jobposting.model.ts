import { Schema, Document, model, models } from "mongoose";

export interface IEvent extends Document {
    _id: string;
    company: string;
    companyWebsite: string;
    companySize: number;
    companyIndustry: string;
    companyLinkedin: string;
    title: string;
    description: string;
    targetCompensation: number;
    city: string;
    state: string;
    createdAt: Date;
    updatedAt: Date;
    referrals: Schema.Types.ObjectId | string | null; // Assuming 'referrals' can be null
    organizer: Schema.Types.ObjectId | string; // Assuming 'organizer' is always present
}

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
    referrals: { type: Schema.Types.ObjectId, ref: 'Referral' },
    organizer: { type: Schema.Types.ObjectId, ref: 'User' },
});

const JobPosting = models.JobPosting || model('JobPosting', JobPostingSchema);


export default JobPosting;