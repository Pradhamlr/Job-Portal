import express from 'express'
import { changeJobAppplicationStatus, changeVisibility, getCompanyData, getCompanyJobAppplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/companyController.js'
import upload from '../config/multer.js'
import { protectCompany } from '../middleware/authMiddleware.js'
const router = express.Router()

// Register a Company
router.post('/register', upload.single('image'), registerCompany)

// Company Login
router.post('/login', loginCompany)

// Get Company Data
router.get('/company', protectCompany, getCompanyData)

// Post a Job
router.post('/post-job', protectCompany, postJob)

// Get Applicants Data
router.get('/applicants', protectCompany, getCompanyJobAppplicants)

// Get Company Job List
router.get('/list-job', protectCompany, getCompanyPostedJobs)

// Change Application Status
router.post('/change-status', protectCompany, changeJobAppplicationStatus)

// Change Applications Visibilty
router.post('/change-visiblity', protectCompany, changeVisibility)

export default router