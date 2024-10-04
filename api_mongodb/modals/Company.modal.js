// company.model.js
import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
  companyName: { type: String, required: true }, 
  website: { type: String, required: true },
  foundingYear: { type: Number, required: true },
  founderName: { type: String, required: true },
  industry: { type: String, required: true },
  employeeCount: { type: String, required: true },
  mission: { type: String, required: true },
  vision: { type: String, required: true },
  services: [{
    title: { type: String, required: true },
    description: { type: String, required: true }
  }],
  whyChooseUs: [{
    statement: { type: String, required: true }
  }],
  achievements: [{
    title: { type: String, required: true },
    description: { type: String, required: true }
  }],
  socialMedia: {
    linkedin: { type: String },
    instagram: { type: String },
    twitter: { type: String }
  }
}, {
  timestamps: true
});

export const Company = mongoose.model('Company', companySchema);
