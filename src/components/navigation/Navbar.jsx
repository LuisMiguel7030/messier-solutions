import React, { Component } from 'react';
import logo from '../global/images/logomessier.png';
import '../global/css/navbar.css'
import '../animation/scroll.js'

class Navbar extends Component {

    scroll() {
        window.scrollTo(0, 800);
    } 

  render() {
    return (
      
    <nav id='navbar' className = 'menu menu-transparent'>
      <ul>
          <li className='menu-item left'><img src={logo} alt="" height="55" width="200"/></li>   
          <div className='menu-group' >
              <li className='menu-item'><a href="#Portafolio" onClick={scroll()}>Inicio</a></li>
              <li className='menu-item'><a href="#Portafolio">Acerca</a></li>
              <li className='menu-item'><a href="#Portafolio">Equipo</a></li>
              <li className='menu-item'><a href="#Portafolio">Herraminetas</a></li>
              <li className='menu-item'><a href="#Home">servicios</a></li>
              <li className='menu-item'><a href="#Home">Contacto</a></li>
          </div>           
      </ul>
    </nav> 
    
    )
  }
};

export default Navbar;
