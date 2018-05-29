import React from 'react';
import PropTypes from 'prop-types';

const Team = ({ photo, name, ocupation}) => {
  return (
    
    <div className='team-item'>
        <img src={photo} alt=""/>
        <div className='team-wrap' >
            <div className='team-content' >
                <h6 className='team-name'>{name}</h6>
                <div className= 'team-role'>{ocupation}</div>
            </div>
            <div></div>
        </div>
    </div>
    
  )
};

Team.propTypes = {
    photo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ocupation: PropTypes.string.isRequired
}

export default Team;