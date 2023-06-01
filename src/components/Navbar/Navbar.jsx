import './Navbar.css';

function Navbar() {
  
    return (
        <>
        <header>
            <div className="nav-container">
                <nav>
                    <a href="#" className='logo'>H&.E</a>
                    <div className="dsk-nav">
                        <ul className='nav-list'>
                            
                            <li><a href="https://www.linkedin.com/in/hamza-elgarrai" target='_blank' className="nav-link">Linkedin</a></li>
                            <li><a href="https://github.com/Elgarrai-Hamza?tab=repositories" target='_blank' className="nav-link">Github</a></li>
                            <li><a href="https://gitlab.com/hamzaelgarrai.dev" target='_blank' className="nav-link">GitLab</a></li>
                            <li><a href="#contact-point" className="nav-link">Contact</a></li>
                        </ul>
                    </div>
                   
                    <div className="mb-nav">
                        <ul className='nav-list'>
                            <li><a href="https://www.linkedin.com/in/hamza-elgarrai" target='_blank' className="nav-link-mb"><i className="uil uil-linkedin"></i></a></li>
                            <li><a href="https://github.com/Elgarrai-Hamza?tab=repositories" target='_blank' className="nav-link-mb"><i className="uil uil-github-alt"></i></a></li>
                            <li><a href="https://gitlab.com/hamzaelgarrai.dev" target='_blank' className="nav-link-mb"><i className="uil uil-gitlab"></i></a></li>
                            <li><a href="#contact-point" className="nav-link-mb"><i className="uil uil-envelope-alt"></i></a></li>
                        </ul>
                    </div>
                </nav>

             </div>

        </header>

        </>
        
      
    )}
  
  export default Navbar