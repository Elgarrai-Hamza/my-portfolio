import './AboutMeDetails.css';
//import My_Picture from '../../assets/DSC_0022.jpg';
import Mouse_picture from '../../assets/chevron-force-down.svg';

const AboutMeDetails = () => {
    return ( 
    
        <div className="about-wrapper">

            <div className="about-container">
                <div className="aboutLeftSide">
                    <h2 className='name-tag animate__animated animate__fadeInUp  animate__delay-1s'>Hi, I'm Hamza</h2>
                    <h3 className='job animate__animated animate__fadeInUp  animate__delay-2s'>Software Developer</h3>
                    <p className='about animate__animated animate__fadeInUp  animate__delay-3s'>I consistently produce aesthetically pleasing software of exceptional quality through dedicated practice and ongoing education.</p>
                </div>
              

            </div>
            <span className='scroll-down-span'>
                <img src={Mouse_picture} alt="mouse" className='mouse-img-styled' />
                <span className='scroll-down-txt'>Scroll Down</span>
            </span>
        </div>
         
        
     );
}
 
export default AboutMeDetails;