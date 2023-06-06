import './Footer.css';
const Footer = () => {

    const currentDate = new Date().getFullYear();
    return ( 
    <footer>

        
        <div className="footer-container">
            <h4>Connect and Explore</h4>
            <p>Find me on GitHub, GitLab, and LinkedIn to explore my code repositories, projects, and professional background</p>
            <ul className="socials">
                <li><a href="https://www.linkedin.com/in/hamza-elgarrai" target='_blank'><i className="uil uil-linkedin"></i></a></li>
                <li><a href="https://github.com/Elgarrai-Hamza?tab=repositories" target='_blank'><i className="uil uil-github"></i></a></li>
                <li><a href="https://gitlab.com/hamzaelgarrai.dev" target='_blank'><i className="uil uil-gitlab"></i></a></li>
                
                
            </ul>
        </div>
        <div className="footer-bottom">
            <p> Designed & coded by Hamza Elgarrai <span>&copy; {currentDate}</span> </p>
        </div>



    </footer> 
    );
}
 
export default Footer;