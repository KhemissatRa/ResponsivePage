import Footer from './Components/Footer'
import Header from './Components/header'
import Nav from "./Components/Nav"
import Clients from "./Components/clients"
import  Featears from "./Components/featears" 
import Testimonials from './Components/Testimonials'
import Post from './Components/Post'
import './App.css' 
export default function App() {
  return (
    <div className='  min-h-screen     bg-[#0f172a]'>
        <Nav/>
    
        <Header/>
        
         
       <Clients/> 
       <section id="About" >

       <Featears 

src="src\assets\Shapes (1).png"
  firstWorld="Unlimited" 
  title="ideas for your next great projects"
  description="Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia."
  upTitle="Discover" 
  styleThree="md:w-[375px] md:h-[379px] w-[220px] h-[222px]"
 Go={<p>Discover Ideas <i className="fa-solid fa-right-to-bracket"></i></p>}
/>


<Featears 
styleTwo="text-5xl"
styleOne="max-w-[450px] min-h-[297px] w-[361px] h-[248px]"
styleThree="md:w-[750px] md:h-[480px] w-[361px] h-[248px]"
  src="src\assets\DesktopTwo.png"
  title="All the tools you can imagine"
  description="Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh  sapien elit gravida ac, rutrum molestie adipiscing lacinia."
  upTitle="Powerful" 
/>
</section>
<section id="Solution" >

<Featears 
  src="src\assets\Shapes (2) (1).png"
  firstWorld="Target"
  styleThree="md:w-[284px]  md:h-[284px] w-[215px] h-[215px]" 
  title="customers with our powerful AI kit"
  description="Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc.
Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia."
  upTitle="Customers"
  Go={<p>How Targeting Customers Works <i className="fa-solid fa-right-to-bracket"></i></p> }
 
/>

  <Featears 
styleTwo="text-5xl "
styleOne="max-w-[450px] min-h-[297px]"
styleThree="md:w-[750px] md:h-[480px] w-[361px] h-[248px]"
  src="src\assets\DesktopTwo.png"
  title="Work fast w/o interrup
  tions"
  description="Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia."
  upTitle="Speed" 
/>
</section>
<section id="Testimonials" >
<Testimonials/>
</section>
<section id="Resources" >
<Post/>
</section>
<section id="Contact" >

<Footer/>
</section>
  </div>
  )
}
