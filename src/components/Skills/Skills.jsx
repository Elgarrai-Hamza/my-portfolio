import './Skills.css';
import Slide from 'react-reveal/Slide';
const Skills = () => {
    return ( 
    
        <div className="skills-wrapper">

            <h2 className='skills-tag'>Skills</h2>
            <Slide bottom>
            <div className="skills-icons-container">
                <div className="icon-box">
                     <i className="devicon-react-original colored devicon"></i>
                    <p>React</p>
                </div>
                <div className="icon-box">
                    <i className="devicon-nodejs-plain colored devicon"></i>
                    <p>NodeJS</p>
                </div>
                <div className="icon-box">
                    <i className="devicon-express-original devicon"></i>
                    <p>express</p>
                </div>
                <div className="icon-box">
                    <i className="devicon-mongodb-plain colored devicon"></i>
                    <p>mongoDB</p>
                </div>
                <div className="icon-box">
                    <i className="devicon-mysql-plain colored devicon"></i>
                    <p>MySQL</p>
                </div>
                <div className="icon-box">
                    <i className="devicon-tailwindcss-plain colored devicon"></i>
                    <p>tailwind</p>
                </div>
                <div className="icon-box">
                    <i className="devicon-dotnetcore-plain colored devicon"></i>
                    <p>.NET Core</p>
                </div>
                <div className="icon-box">
                    <i className="devicon-git-plain colored devicon"></i>
                    <p>Git</p>
                </div>
            
            </div>

            <h4>Currently working on:</h4>
            <p>Improving my skills in, and understanding of <b>GraphQL</b>, <b>Redux</b> and <b>Docker</b> </p>



            </Slide>
            

            

            
        </div> 
    );
}
 
export default Skills;