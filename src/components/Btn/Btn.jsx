import React from 'react';
import './Btn.css'

const Btn = ({title, className, to, role, stylish}) => (
  <>
    <a 
      className="btn btn-primary btn-effect" 
      href={to} 
      role="button" 
      style={stylish}
      >
        {title}
      </a>
  </>
);

export default Btn;