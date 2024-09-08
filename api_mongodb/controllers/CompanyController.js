import { Company } from '../models/Company.model.js';

// Get all companies
export const getCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (err) {
    console.error("Error fetching companies:", err);
    res.status(500).json({ message: 'Error fetching companies', error: err.message });
  }
};

export const createCompany = async (req, res) => {
  try {
    const newCompany = new Company(req.body);
    console.log(newCompany)
    const result = await newCompany.save();
    res.status(201).send(result);
  } catch (err) {
    console.error("Error in createCompany:", err);
    res.status(500).send({ message: 'Error creating Company', error: err });
  }
};



export const getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) return res.status(404).json({ message: 'Company not found' });
    res.status(200).json(company);
  } catch (err) {
    console.error("Error fetching company:", err);
    res.status(500).json({ message: 'Error fetching company', error: err.message });
  }
};

// Update a company by ID
export const updateCompanyById = async (req, res) => {
  try {
    const result = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!result) return res.status(404).send({ message: 'Comapny not found' });
    res.send(result);
  } catch (err) {
    res.status(500).send({ message: 'Error updating Company', error: err });
  }
};

// Delete a company by ID
export const deleteCompanyById = async (req, res) => {
  try {
    const result = await Company.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).send({ message: 'Company not found' });
    res.send({ message: 'Company deleted successfully' });
  } catch (err) {
    res.status(500).send({ message: 'Error deleting Company', error: err });
  }
};
