import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../forms/ContactForm.jsx';
import '../global/css/maintenance.css'
import mantenimiento from '../global/images/mantenimiento.png';
import facebook from '../global/icons/facebook-gris.svg';
import instagram from '../global/icons/instagram-gris.svg';
import twitter from '../global/icons/twitter-gris.svg';
import linkedin from '../global/icons/linkedin-gris.svg';

export default class Mantenimiento extends Component {

    scrollContact = () => {
        window.scroll(0, 830)
    }

  render() {
    return (
        <div className='maintenance-container'>
        <div className='maintenance-opacity'>
            <section className='maintenance-container-1'>
                <h2>Estamos haciendo mejoras en nuestra página web</h2>
                <h2>Estamos de vuelta muy pronto</h2>
            </section>
            <section className='maintenance-container-2'> 
                <img src={mantenimiento} alt="" height='110px'/>
            </section>
            <section className='maintenance-container-3'> 
                <a href="https://www.facebook.com/messiersolutions/"><img src={facebook} alt="" height='30'/></a>
                <a href="https://www.instagram.com/messiersolutionscol/"><img src={instagram} alt="" height='30'/></a>
                <a href="https://twitter.com/messiersolcol"><img src={twitter} alt="" height='30'/></a>
                <a href="https://www.linkedin.com/company/messier-solutions/"><img src={linkedin} alt="" height='30'/></a>
            </section>
            <section className='maintenance-container-4'>
                <Link className='btn btn-circle transparent border-white small' to='/contact' >contáctanos</Link>
            </section>
        </div>
    </div>
    )
  }
};
