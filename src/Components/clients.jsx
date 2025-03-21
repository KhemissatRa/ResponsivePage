
import logo from '../assets/Logo-grey  (5).png'
import logo1 from '../assets/Logo-grey  (1).png'
import logo2 from '../assets/Logo-grey  (2).png'
import logo3 from '../assets/Logo-grey  (3).png'
import logo4 from '../assets/Logo-grey  (4).png'

export default function Clients() {
  return (
    <div className='conatiner mx-auto max-w-full px-auto flex flex-col justify-center text-center items-center  space-y-8'>
        <h1 className='font-semiblod text-5xl text-white'>Join Leading Companies</h1>
   <div className='flex flex-wrap justify-center items-center space-y-8 space-x-4 mx-auto'>
    <img src={logo} alt="logo" />
    <img src={logo1} alt="logo" />
    <img src={logo2} alt="logo"/>
    <img src={logo3}  alt="logo"/>
    <img src={logo4} alt="logo"/>

   </div>
    </div>

  )
}
