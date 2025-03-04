import React from 'react'

export default function Post() {
  return (
    <div className='bg-white space-y-8 p-8'>
 <div className='flex justify-between flex-row '>
    <h1 className='text-5xl font-bold'>Design events near your</h1>
    <p className='text-purple-600'>Explore Events  <i class="fa-solid fa-right-to-bracket text-purple-400"></i></p>
 </div>
 <div className='flex justify-center md:justify-between space-x-4 flex-col md:flex-row'>
 <div>
    <div className='relative'>
    <img src="src\assets\Picture (1) (1).png" alt="" srcset="" />
    <h6  className='absolute left-2 top-4 p-1 border border-white bg-white rounded-md text-purple-600 text-xs ' >Design Thinking</h6>

    </div>
    <h4 className='font-semibold'>Design Thinking</h4>
    <h1 className='font-bold text-3xl'>Wild Horse Event</h1>
    <p className='pt-4 text-purple-600' >Explore Events  <i class="fa-solid fa-right-to-bracket text-purple-400"></i></p>

 </div>
 <div>
    <div className='relative'>
    <img src="src\assets\Picture (2) (1).png" alt="" srcset="" />
    <h6  className='absolute left-2 top-4 p-1 border border-white bg-white rounded-md text-purple-600 text-xs ' >Festival</h6>
    </div>
    <h4 className='font-semibold'>Festival</h4>
    <h1 className='font-bold text-3xl' >Music & Colors</h1>
    <p className='pt-4 text-purple-600' >Explore Events  <i class="fa-solid fa-right-to-bracket text-purple-400"></i></p>

 </div> 
 <div >
    <div className='relative'>
    <img className=' z-10' src="src\assets\Picture (3).png" alt="" srcset="" />
    <h6 className='absolute left-2 top-4 p-1 border border-white bg-white rounded-md text-purple-600 text-xs '>Bootcamp</h6>
    </div>
    <h4 className='font-semibold'>Bootcamp</h4>
    <h1 className='font-bold text-3xl' >Happy Father’s Day</h1>
    <p className='pt-4 text-purple-600' > Explore Events  <i class="fa-solid fa-right-to-bracket text-purple-400"></i></p>
    
 </div>
</div>
    </div>
  )
}
