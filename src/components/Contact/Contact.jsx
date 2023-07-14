import './Contact.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Fade from 'react-reveal/Fade';




const Contact = () => {

    
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm( 'service_34zcg1z' ,
                        'template_djaooxc' ,
                         form.current , 'NC0d5AHG-DcYaUPZY' )
        .then((result) => {
            console.log(result.text);
            alert("Thank you for getting in touch with me. I will respond to you as soon as possible.");
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };

    return ( 

        <div className='contact-wrapper'id='contact-point'>

            <h2 className='contact-tag'>Contact</h2>
            <Fade bottom>


            
                <div className="flex-dev">

                    <div className="text-wrapper">
                        <h4>Get In Touch</h4>
                        <p>I am excited to hear from you and to see if there is an opportunity for us to collaborate and create something remarkable.
                            If you're interested in learning more about me and what I can bring to the table, feel free to ask for my resume.
                            To get in touch, simply fill out the form. I eagerly anticipate hearing from you soon!
                        </p>

                    </div>
                    <div className="form-wrapper">
                        <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" />

                           

                            <button type="submit" value="Send" className='submitButton'>

                                SEND
                                <i class="uil uil-message"></i>

                            </button>
                        
                    
                        

                    

                        
                    
                        </form>
                    </div>



                </div> 

            </Fade>          

        </div> 

    );
}
 
export default Contact;