import React from 'react'
import './Logo.css'
import brain from './brain.png';
import Tilt from 'react-tilt';

const Logo=()=>{
    return(
        <div className='ma4 mt0 center'>
            <Tilt className="Tilt shadow-5 br2" options={{ max : 25 }} style={{ height: 'auto', width: 100 }} >
            <div className="Tilt-inner pa3"> <img style={{paddingTop:'5px'}} src={brain} alt="" /></div>
            </Tilt>
        </div>
    );
}

export default Logo; 