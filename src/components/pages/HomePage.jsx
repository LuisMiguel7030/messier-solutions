import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../forms/ContactForm.jsx';
import Service from '../component/Service.jsx';
import Team from '../component/Team.jsx';

import '../global/css/cover.css'
import '../global/css/buttons.css'
import '../global/css/grid.css'
import '../global/css/texts.css'
import '../global/css/card.css'
import '../global/css/flex.css'
import '../global/css/from.css'

import ui from '../global/images/ui.jpeg'
import front from '../global/images/front.jpeg'
import back from '../global/images/back.jpeg'

import andres from '../global/images/andres.jpeg'
import jorge from '../global/images/jorge.jpeg'
import klaus from '../global/images/klaus.jpeg'
import user4 from '../global/images/user4.jpeg'
import miguel from '../global/images/miguel.jpeg'
import luismiguel from '../global/images/luismiguel.jpeg'
import juan from '../global/images/juan.jpeg';

const HomePage = () => (
    <div>
        <div className='background-image'>
            <div className='background-opacity'>
                <section className='cover-container'>
                    <h1 className='header-text' >Messier Solutions</h1>
                    <h2 className='main-header-text'>Soluciones de TI a la medida</h2>
                    <div className='grid-center'>
                        <Link className='btn btn-circle border-white transparent small' to='/about' >Nosotros</Link>
                    </div>
                </section>   
            </div>
        </div>

        <main className='content-container'>
        
                <h1 className='maintitle-text'>Quiénes Somos</h1>
                <p className ='text'>
                    Somos una empresa colombiana enfocada al diseño y desarrollo de aplicativos 
                    standalone, web y móviles con los mas altos estándares de la industria, 
                    ajustándonos a los requerimientos del cliente.
                </p>	
        </main>

        <section id='team' style={{marginBottom: '100px'}}>
            <div className='content-container' >
                <h1 className='maintitle-text' >Equipo de trabajo</h1>
            </div>
            <div className='team-grid'>
                <Team photo={luismiguel} name='Luis Miguel Barragán' ocupation='Fundador' />
                <Team photo={klaus} name='Klaus Thelen' ocupation='Fundador' />
                <Team photo={andres} name='Andres Perez' ocupation='Desarrollador' />
                <Team photo={jorge} name='Jorge Pinto' ocupation='Desarrollador' />
                <Team photo={juan} name='Juan David Galindo' ocupation='Auditor de Seguridad' />
                <Team photo={miguel} name='Luis Miguel Ferro' ocupation='Diseñador' />               
            </div>
            <div className='grid-center'>
                <Link className='btn btn-circle border-primary transparent small' to='/about'>Nosotros</Link>
            </div>
            
        </section>
        

        <div className='content-container' >
            <h1 className='maintitle-text' >Herramientas</h1>
        </div>

        <div id='tools' className='flex-container'>
            
            <div className='card flex-item'>
                
                <img src={ui} alt=""/>
                <h1 className='subtitle-text' >ui/ux</h1>
                <div className='card-content' >
                    <h4 className ='white-text extra-light'> 
                        <strong>UI</strong> es un acrónimo de <strong>User interface</strong>, 
                        y  <strong>UX</strong>  significa <strong>User 
                        Experience</strong>. Por lo tanto UI se refiere 
                        a la creación de la interfaz, ya sea gráfica o desarrollada 
                        con diversas tecnologías web. UX por lo tanto se concentra 
                        en ponerse en los zapatos del usuario y verificar la usabilidad
                    </h4>
                </div>
            </div>

            <div className='card flex-item'>
                <img src={front} alt=""/>
                <h1 className='maintitle-text'>Front-end</h1>
                <div className='card-content' >
                    <h4 className ='white-text extra-light'> 
                    <strong>Frontend</strong> es la parte de un programa o dispositivo a la que un 
                    usuario puede acceder directamente. Son todas las  <strong>tecnologías 
                    de diseño</strong> y  <strong>desarrollo web</strong> que corren en el navegador y que se 
                    encargan de la interactividad con los usuarios.
                    </h4>
                </div>
            </div>

            <div className='card flex-item'>
                <img src={back} alt=""/>
                <h1 className='white-text' >back-end</h1>
                <div className='card-content' >
                    <h4 className ='white-text extra-light'> 
                        <strong>Backend</strong> es la capa de acceso a datos de un <strong>software</strong> o cualquier 
                        dispositivo, que no es directamente accesible por los usuarios, 
                        además contiene la lógica de la aplicación que maneja dichos datos. 
                        El <strong>Backend</strong> también accede al servidor.
                    </h4>
                </div>
            </div>
        </div>

        <div>
            <div className='content-container' >
                <h1 className='maintitle-text' >Servicios</h1>
            </div>
            <Service />
        </div>
        

        <ContactForm/>

        
    </div>


);

export default HomePage;