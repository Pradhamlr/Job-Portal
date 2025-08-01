import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const JobCard = ({job}) => {
    const navigate = useNavigate()

  return (
    <div className=' p-6 shadow rounded'>
        <div className='flex justify-between items-center'>
            <img className='h-8' src={job.companyId.image} alt='Company' />
        </div>
        <h4 className='font-medium text-xl mt-2'>{job.title}</h4>
        <div className='flex items-center gap-3 mt-2 text-xs'>
            <span className=' bg-blue-100 border border-blue-300 px-4 py-1.5 rounded'>{job.location}</span>
            <span className=' bg-red-100 border-red-300 px-4 py-1.5 rounded'>{job.level}</span>
        </div>
        <p className='text-gray-500 text-sm mt-4' dangerouslySetInnerHTML={{__html: job.description.slice(0, 150)}}></p>
        <div className='mt-4 flex gap-4 text-sm'>
            <button onClick={() => {navigate(`/apply-job/${job._id}`); scrollTo(0,0)}} className='text-white rounded bg-blue-600 px-4 py-2 cursor-pointer'>Apply Now</button>
            <button className='text-gray-500 border rounded border-gray-500 px-4 py-2 cursor-pointer'>Learn More</button>
        </div>
    </div>
  )
}

export default JobCard