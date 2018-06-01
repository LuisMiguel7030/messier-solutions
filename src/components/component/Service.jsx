import React from 'react';
import { Link } from 'react-router-dom';
import phone from '../global/images/phone2.png';
import web from '../global/images/web.png';
import marketing from '../global/images/marketing.png';

import '../global/css/service.css'

const componentName = () => {
  return (
    <div className='service ' >
      <div className='service-flex dark-primary' >
        <div>
            <h2 className='justify'>Aplicaciones Moviles</h2>
            <p className='justify' >
                Desarrollo de aplicaciones a la medida para dispositivos moviles. 
                Tenemos en cuenta los dos sistemas operativos moviles mas usados en la actualidad.
            </p>
            <Link className='btn white small width' to='/movil' >ver más</Link>
        </div>
        <div>
            <img src={phone} alt="" height='340px'/>
        </div>
      </div>

      <div className='service-flex primary' >
        <div>
            <img src={web} alt="" height='300px' />
        </div>
        <div>
            <h2 className='justify'>Soluciones Web</h2>
            <p className='justify' >
                Desarrollo de plataformas online con implementacion del lado del servidor 
                y del lado del cliente con diseño de un modelo de negocios optimo. 
                Implementacion de medidas de aseguramiento de la informacion.
            </p>
            <Link className='btn white small width' to='/web'>ver más</Link>
        </div>
      </div>

      <div className='service-flex accent' >
        <div>
            <h2 className='justify'>Marketing Digital</h2>
            <p className='justify' >
            Marketing Digital es el uso de Internet y las redes sociales con el objetivo de mejorar 
            la comercialización de un producto o servicio. Implementado mejoras en un sitio web, 
            posicionamiento en buscadores, redes sociales y publicidad online, entre muchos servicios
            que ofrecemos.
            </p>
            <Link className='btn white small width' to='/marketing' >ver más</Link>
        </div>
        <div>
            <img src={marketing} alt="" height='300px'/>
        </div>
      </div>
    </div>
  )
};

export default componentName;
