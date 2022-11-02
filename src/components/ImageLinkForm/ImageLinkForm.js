import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm=({onInputChange,onSubmit})=>{
    return(
        <div>
            <p>{'This Magic will detect the faces in the picture you provide...Dont believe it,then give it a try'}</p>
            <div className='center '>
                <div className='form pa3 br2 shadow-5 center'>
                <input type='text' className='f4 pa2 w-70 center' onChange={onInputChange} />
                <button className='f4 w-30 grow link ph3 pv2 dib white bg-light-purple' onClick={onSubmit}>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm; 