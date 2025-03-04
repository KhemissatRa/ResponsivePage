import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-center p-4 items-center flex-col max-h-full max-w-full'>
        <div className='text-center p-4 space-y-8'>
        <h1 className='text-7xl text-white font-semibold space-x-4'>Design <span className='underline underline-offset-5 decoration-[#9333EA]'>Faster</span><span className='text-[#9333EA]'>&</span> Better</h1>
        <p className='text-white text-md' >Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris.
        <br/>Pharetra eu imperdiet ipsum ultrices amet, dui sit suspendisse.</p>
        <div className='space-x-4'>
            <button className='text-white border rounded-md border-[#9333EA] bg-[#9333EA] w-32 h-10'>Join Now</button>
            <button className='border text-white border-white rounded-md w-32 h-10'>View Demo</button>

        </div>
        </div>
        <img className="" src="src\assets\Desktop.png" alt='desktop'/>
    </div>
  )
}
