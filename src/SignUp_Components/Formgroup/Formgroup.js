import './Formgroup.css';
import eye from '../../Images/eye.svg';
import { useState } from 'react';

const Formgroup = ({label, img, passcss, onClick, PasswordShow, namecss, select, ...props}) => {
  
 

  return (
    <div className={`form-group ${namecss}`}>
      <div className={`show ${passcss}`}>
      <label className="form-label">{label}</label>
      {img && <p onClick={onClick}><span><img src={eye} alt="eye"/>{PasswordShow ? 'Hide' : 'Show'}</span></p>}
      </div>
      <input {...props} className="form-input"/>
    </div>
  )
}

export default Formgroup