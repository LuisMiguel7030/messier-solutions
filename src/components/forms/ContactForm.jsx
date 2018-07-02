import React, { Component } from 'react';
import axios from 'axios';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import sent from '../global/icons/sentmail.svg';

const axiosInstance = axios.create({
    baseURL: 'http://wwww.messiersolutions.com/api/',
  });

class ContactForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         send: {
             name: '',
             email: '',
             phone: '',
             city: '',
             solution: '',
             message: ''
         },
         error: ''
      };

      this.handleChange = this.handleChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    };

    handleChange = (e) => {
        this.setState({
            send: { ...this.state.send, [e.target.name]: e.target.value }
        });
    };

    onSubmit = (event) => {
        
        if(this.validate()) {
            axiosInstance.post('sendemail/', this.state.send)
                .then(function (response) {
                    console.log(response);
                    document.getElementById('contact-form').reset();
                    NotificationManager.success('Mensaje Enviado', 'Éxito');
                    
                })
                .catch(function (error) {
                    console.log(error);
                    NotificationManager.error('Mensaje No Enviado', 'Error', 5000, () => {
                        alert('callback');
                    });
                });
        }else {
            NotificationManager.warning('Campo Incompleto', 'Advertencia', 3000);
        } 
        event.preventDefault();
    };

    validate = () => {
        let errors = '';
        const data = this.state;

        if (!data.send.name){
            errors = false;
        }
        else if(!data.send.email){
            errors = false
        }
        else if(!data.send.phone){
            errors = false
        }
        else {
            errors = true
        }
        return errors;
    };
    
  render() {
    const {send, error} = this.state;
    return (
        <div>
            <div className='contact-container' >
                <div className='flex-middle'>
                        <form id='contact-form' onSubmit={this.onSubmit} className='contact-grid'>
                            <input className='item-1' type="text" placeholder='Nombre' name='name' value={send.name} onChange={this.handleChange} />
                            <input className='item-2' type="email" placeholder='Email' name='email' value={send.email} onChange={this.handleChange}/>
                            <input className='item-3' type="text"  placeholder='Teléfono' name='phone' value={send.phone} onChange={this.handleChange}/>
                            <input className='item-4' type="text"  placeholder='Ciudad' name='city' value={send.city} onChange={this.handleChange}/>
                            <select className='item-5' title='Servicios' name='solution' value={send.solution} onChange={this.handleChange}> 
                                <option hidden>Que solución buscas ...</option>
                                <option>Desarrollo web</option>
                                <option>Desarrollo de Software</option>
                                <option>Aplicaciones Móviles</option>
                                <option>Marketing Digital</option>
                            </select>
                        
                            <textarea className='item-6' name='message' value={send.message} onChange={this.handleChange} cols="30" rows="10"></textarea>
                            <button type='submit' className='btn primary fluid item-7 icon' >
                                <img src={sent} className="sentemail" width='24px' height='24px'/>
                                enviar
                            </button>
                        </form>  
                </div> 
            </div> 
            <NotificationContainer/>
        </div>
    )
  }
};

export default ContactForm;