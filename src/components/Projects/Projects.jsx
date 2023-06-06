import './Projects.css'
import ImageSlider from "../../ui-components/Carousel/Carousel";
import Fade from 'react-reveal/Fade';

const Projects = () => {

    const Odyssey =[
        { url: "https://hamza-e-dev.netlify.app/Odyssey/home_1.png", title: "home_page" },
        { url: "https://hamza-e-dev.netlify.app/Odyssey/home_2.png", title: "home_page" },
        { url: "https://hamza-e-dev.netlify.app/Odyssey/home_3.png", title: "home_page" },
        { url: "https://hamza-e-dev.netlify.app/Odyssey/blog_1.png", title: "blog_page" },
        { url: "https://hamza-e-dev.netlify.app/Odyssey/resources_1.png", title: "recources_page" },
        { url: "https://hamza-e-dev.netlify.app/Odyssey/destination_1.png", title: "destination_page" },
        { url: "https://hamza-e-dev.netlify.app/Odyssey/about_1.png", title: "about_page" },
         
      ];
    
    const EMA =[
        
        { url: "https://hamza-e-dev.netlify.app/EMA/Details_Admin.png", title: "details_page" },
        { url: "https://hamza-e-dev.netlify.app/EMA/Gestion_Salaire_Admin.png", title: "salaire_page" },
        { url: "https://hamza-e-dev.netlify.app/EMA/Gestion_Employee_Admin.png", title: "employee_page" },
        { url: "https://hamza-e-dev.netlify.app/EMA/Gestion_Pannes_Admin.png", title: "pannes_page" },
        { url: "https://hamza-e-dev.netlify.app/EMA/Gestion_Demandes_Admin.png", title: "demandes_page" },
        { url: "https://hamza-e-dev.netlify.app/EMA/Gestion_Congés_Admin.png", title: "conges_page" },
        { url: "https://hamza-e-dev.netlify.app/EMA/Declare_Panne_Emp.png", title: "declare_page" },
        { url: "https://hamza-e-dev.netlify.app/EMA/Taches_EMP.png", title: "taches_page" },
  
      ];


      const Cryptonik =[
        
        { url: "https://hamza-e-dev.netlify.app/Cryptonik/home-page.png", title: "home-page" },
        { url: "https://hamza-e-dev.netlify.app/Cryptonik/home-page2.png", title: "home-page2" },
        { url: "https://hamza-e-dev.netlify.app/Cryptonik/page2-header.png", title: "page2-header" },
        { url: "https://hamza-e-dev.netlify.app/Cryptonik/page2-body.png", title: "page2-body" },

      ];

    return ( 
        
        
        <div className='projects-wrapper'>

            <h2 className='projets-tag'>Projects</h2>

            <Fade left>


                <div className="project-wrapper">

                    
                        <div className="img-div">
                        <ImageSlider slides={Cryptonik} />
                        </div>
                        <div className="description">
                            <h3 className="project-name">Cryptonik</h3>
                            <p className="project-description">Cryptonik is an innovative app that keeps you informed about the latest crypto-currency trends in real time. you can easily search and access detailed information on a wide range of crypto-currencies.</p>
                            <div className="links">
                            <a href="https://cryptonik-coins.netlify.app" target='_blank' className="link-to">Live Site <i class="uil uil-external-link-alt"></i> </a> 
                            <a href="https://github.com/Elgarrai-Hamza/Cryptonik" target='_blank' className="link-to">Code Source <i className="uil uil-github-alt"></i></a>
                            </div>
                            
                        </div>
                    

                </div>
                

            </Fade>

            <Fade left>

                <div className="project-wrapper">
                    
                        <div className="description">
                            <h3 className="project-name">Odyssey Blog</h3>
                            <p className="project-description">Odyssey is a static website built using HTML, CSS, and JavaScript, with a sleek and efficient design that serves as a front-end platform to promote tourism in Morocco and offer a range of resources and services.</p>
                            <div className="links">
                            <a href="https://elgarrai-hamza.github.io/Odyssey-Blog/" target='_blank' className="link-to">Live Site <i class="uil uil-external-link-alt"></i></a>
                            <a href="https://github.com/Elgarrai-Hamza/Odyssey-Blog" target='_blank' className="link-to">Code Source <i className="uil uil-github-alt"></i></a> 
                            </div>
                            
                        </div>
                        <div className="img-div">
                        <ImageSlider slides={Odyssey} />
                        </div>
                        
                    
                </div>
                
            </Fade>

            

            <Fade left>
 
                <div className="project-wrapper">
                    
                        <div className="img-div">
                        <ImageSlider slides={EMA} />
                        </div>
                        <div className="description">
                            <h3 className="project-name">EMA</h3>
                            <p className="project-description">The project, named EMA, consists in the study, the conception and the realization of a system
                            allowing to optimize the management of the personnel and the handling of the breakdowns.</p>
                            <div className="links">
                            <a href="https://gitlab.com/hamzaelgarrai.dev/EMA_V2" target='_blank' className="link-to">Code source <i className="uil uil-github-alt"></i></a>
                            </div>
                            
                        </div>
                    
                </div>
                

            </Fade>

            

            

        </div>

       
     );
}
 
export default Projects;