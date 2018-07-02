import React, { Component } from 'react';
import ContactForm from '../forms/ContactForm.jsx';
import arrow from '../global/icons/arrow-down.svg';
import '../global/css/contact.css';

class ContactPage extends Component {
  render() {
    return (
      <div>
        <div className='background-contact'>
            <div className='opacity-contact'>
                <section className='textarea-contact'>
                    <h1>Contáctenos</h1>
                    <h2>Busca a los Mejores en el Area de Desarrollo no lo Dudes</h2>
                </section>
                <img src={arrow} alt="" height='30px'/>
            </div>
        </div>
        <ContactForm />
      </div>
    )
  }
};

export default ContactPage;