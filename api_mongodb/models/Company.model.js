import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  descrip: { type: String, required: true },
  year: { type: Number, required: true }
  // Remove genre and year if not needed
});

export const Company = mongoose.model('Company', companySchema);
