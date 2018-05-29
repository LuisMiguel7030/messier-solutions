import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import menu from '../global/icons/menu.svg';
import logo from '../global/images/logomessier.png';

class Menu extends Component {

    myfunction = () => {
        let x = document.getElementById("navbar");
        if (x.className === "topnav" || x.className === "topnav white") {
            x.className += " responsive";
        } 
        else if (x.className === "topnav white responsive") {
            x.className = "topnav white";
        }
        else {
            x.className = "topnav";
        }
    }

  render() {
    return (
        <div>
            <div id='navbar' className="topnav">
                <div className='topnav-container' >
                    <Link to='/' onClick={this.scrollHome}>
                        <img src={logo} href='' height='55px' width='200px'/>
                    </Link>
                    <Link to='/contact' >Contacto</Link>
                    <Link to='/tools'>Herramientas</Link>
                    <Link to='/service' >Servicios</Link>
                    <Link to='/about' >Nosotros</Link>                 
                    <a href="javascript:void(0);" className="icon" onClick={this.myfunction}>
                        <img src={menu} href='' height='38'/>
                    </a>
                </div>
            </div>
        </div>   
    )
  }
};

export default Menu;