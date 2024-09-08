import express from 'express';
import {
  getCompanies,
  createCompany,
  getCompanyById,
  updateCompanyById,
  deleteCompanyById
} from '../controllers/CompanyController.js';

const router = express.Router();

// Get all companies
router.get('/', getCompanies);

// Create a new company
router.post('/', createCompany);

// Get a single company by ID
router.get('/:id', getCompanyById);

// Update a company by ID
router.put('/:id', updateCompanyById);

// Delete a company by ID
router.delete('/:id', deleteCompanyById);

export default router;
