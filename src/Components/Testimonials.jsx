import Featears from './featears'
import userTumb from '../assets/User Thumb (1).png'
export default function Testimonials() {
  return (
<div className='bg-[#581C87] flex flex-col md:flex-row justify-center md:justify-betwen  items-center px-8 py-4 '>
    <div>
     <Featears 
    styleTwo="text-5xl"
    styleOne="w-full h-full"
    styleThree="w-full h-full"
      src="src\assets\Mobile-App-Placeholder-2 (1).png"
      title="Bigapp got to the next level"
      upTitle="Testimonials" 
    />" 
    </div>
<div className='text-white space-y-4'>
    <p>“Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”</p>
    <div className='flex space-x-4'>

    <img className='w-[64px] h-[64px]' src={userTumb} alt="personne"/>
   <div>
    <h1 className='text-md '>Rwanda Melflor</h1>
    <p className='text-sm'>Co-founder Bigapp</p>
</div>
</div>
</div>
</div>  
)}