import React from 'react';

import iconomessier from '../global/images/logomessier.png';
import facebook from '../global/icons/facebook.svg';
import instagram from '../global/icons/instagram.svg';
import linkedin from '../global/icons/linkedin.svg';
import phone from '../global/icons/phone.svg';
import mail from '../global/icons/mail.svg';

import '../global/css/footer.css'


const Footer = () => {
  return (
    <footer >
        <div className='footer-container' >
            <div className='footer-socialmedia'> 
                <img src={iconomessier} alt="" height="50" width="150"/>
                <a href="https://www.facebook.com/messiersolutions/">
                    <img src={facebook} alt=""/>
                    <h5>Facebook</h5>
                </a>
                
                <a href="https://www.instagram.com/messiersolutionscol/">
                    <img src={instagram} alt=""/>
                    <h5>Instagram</h5>
                </a>
                <a href="https://www.linkedin.com/company/messier-solutions/">
                    <img src={linkedin} alt=""/>
                    <h5>Linkedin</h5>
                </a>
            </div>
            <div className='footer-location'>
                <h4>Ubicación</h4>
                <h5>Bogotá D.C, Colombia</h5>
            </div>
            <div className='footer-contact'>
                <h4>Contáctenos</h4>
                <section>
                    <img src={phone} alt=""/>
                    <h5>3134970500 - 3118795669</h5>
                </section>
                
                <section>
                    <img src={mail} alt=""/>
                    <h5>info@messiersolutions.com</h5>
                </section>   
            </div>
        </div>
      
        <section className='footer-fluid' > 2018 Messier Solutions. All Rights Reserved.</section>
    </footer>
  )
};

export default Footer;

