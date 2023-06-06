import Navbar from './components/Navbar/Navbar';
import SvgBackground from './components/SvgDiamondShapes/SvgBackground'
import AboutMeDetails from './components/AboutMeDetails/AboutMeDetails';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import './index.css';

function App() {
  
  return (
    
    <div className="App">

      
      
      <SvgBackground/>
      <Navbar/>
      <AboutMeDetails/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
      

   
      
    </div>
  )
}

export default App
