import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Navbar = () => {

    const { openSignIn } = useClerk()
    const { user } = useUser()

    const navigate = useNavigate()

    const {setShowRecruiterLogin} = useContext(AppContext)

  return (
    <header className='shadow py-4'>
        <div className='container px-4 2xl:px-20 flex justify-between items-center mx-auto'>
            <img onClick={() => navigate('/')} className='cursor-pointer' src={assets.logo} alt="Logo" /> 
            {
                user
                ?<div className='flex items-center gap-3 font-medium'>
                    <Link to={'/applications'}>Applied Jobs</Link>
                    <p>|</p>
                    <p className='max-sm:hidden '>Hi, {`${user.firstName}`}</p>
                    <UserButton />
                </div>
                :<div className='flex gap-6 max-sm:text-xs'>
                <button onClick={e => setShowRecruiterLogin(true)} className='cursor-pointer text-[#545454]'>Recruiter Login</button>
                <button onClick={openSignIn} className='bg-[#0260FF] text-[#FFFFFF] rounded-full px-6 sm:px-9 py-2 cursor-pointer'>Login</button>
            </div>
            }
        </div>
    </header>
  )
}

export default Navbar