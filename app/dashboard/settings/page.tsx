import { UserProfile } from '@clerk/nextjs';
import React from 'react'

function Settings() {
  return (
    <div className='flex justify-center items-center h-full p-5'>
        <UserProfile />
    </div>
  )
}

export default Settings;