import React, { useContext, useEffect, useState } from 'react'
import { manageJobsData } from '../assets/assets'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import Loading from '../components/Loading'

const ManageJobs = () => {

        const navigate = useNavigate()

        const [jobs, setJobs] = useState(false)

        const {backendUrl, companyToken} = useContext(AppContext)

        // Function To Fetch Company Job Data
        const fetchCompanyJobs = async () => {

            try {

                const {data} = await axios.get(backendUrl+'/api/company/list-job',{headers: {token: companyToken}})

                if (data.success) {
                    setJobs(data.jobsData.reverse())
                    console.log(data.jobsData)
                } else {
                    toast.error(data.message)
                }
                
            } catch (error) {
                toast.error(error.message)
            }

        }

        // Function To Change Job Visibility
        const changeJobVisibility = async (id) => {

            try {

                const {data} = await axios.post(backendUrl+'/api/company/change-visiblity', 
                    {id},
                    {headers: {token: companyToken}}
                )

                if (data.success) {
                    toast.success(data.message)
                    fetchCompanyJobs()
                } else {
                    toast.error(data.message)
                }
                
            } catch (error) {
                toast.error(error.message)
            }

        }

        useEffect(() => {

            if (companyToken) {
                fetchCompanyJobs()
            }

        }, [companyToken])

  return jobs ? jobs.length === 0 ? (
  <div className='flex items-center justify-center h-[70vh]'>
    <p className='text-xl sm:text-2xl'>No Jobs Posted Or Available</p>
  </div>
) : (
    <div className='container p-4 max-w-5xl'>
        <div className='overflow-x-auto'>
            <table className='min-w-full bg-qhite border border-gray-200 max-sm:text-sm'>
                <thead>
                    <tr>
                        <th className='max-sm:hidden py-2 px-4 border-b border-gray-200 text-left'>#</th>
                        <th className='py-2 px-4 border-b border-gray-200 text-left'>Job Title</th>
                        <th className='py-2 px-4 border-b border-gray-200 text-left max-sm:hidden'>Date</th>
                        <th className='py-2 px-4 border-b border-gray-200 text-left max-sm:hidden'>Location</th>
                        <th className='py-2 px-4 border-b border-gray-200 text-center'>Applicants</th>
                        <th className='py-2 px-4 border-b border-gray-200 text-left'>Visible</th>
                    </tr>
                </thead>
                <tbody>
                   {jobs.map((job, index) => (
                    <tr key={index} className='text-gray-700'>
                        <td className='max-sm:hidden py-2 px-4 border-b border-gray-200'>{index + 1}</td>
                        <td className='py-2 px-4 border-b border-gray-200'>{job.title}</td>
                        <td className='max-sm:hidden py-2 px-4 border-b border-gray-200'>{moment(job.date).format('ll')}</td>
                        <td className='max-sm:hidden py-2 px-4 border-b border-gray-200'>{job.location}</td>
                        <td className='py-2 px-4 border-b border-gray-200 text-center'>{job.applicants}</td>
                        <td className='py-2 px-4 border-b border-gray-200'>
                            <input onChange={()=> changeJobVisibility(job._id)} className='scale-125 ml-4' type="checkbox" checked={job.visible}/>
                        </td>
                    </tr>
                   ))} 
                </tbody>
            </table>
        </div>
        <div className='mt-4 flex justify-end'>
            <button onClick={() => navigate('/dashboard/add-job')} className='cursor-pointer bg-black text-white py-2 px-4 rounded'>Add New Job</button>
        </div>
    </div>
  ) : <Loading />
}

export default ManageJobs