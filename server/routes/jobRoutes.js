import express from 'express'
import { getJobById, getJobs } from '../controllers/jobController.js'

const router = express.Router()

// Route To Get All Jobs
router.get('/', getJobs)


// Route To Get Single Job
router.get('/:id', getJobById)

export default router