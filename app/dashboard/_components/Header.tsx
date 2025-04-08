import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 bg-white '>
      {/* <div className='flex gap-2 items-center p-2 border rounded-md max-w-lg bg-white'>
        <Search/>
        <input type='text' placeholder='Search...' className='outline-none'/>
      </div> */}
     <div className='flex justify-end'><UserButton/></div>
        {/* <h2 className='bg-purple-500 p-1 rounded-full text-xs text-white px-2 '>Join Membership just for $9.99/Month</h2> */}
    
    </div>
  )
}

export default Header
