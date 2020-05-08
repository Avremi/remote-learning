import React from 'react';

// inline style for stiky footer
const footerStyle = {
  position: 'fixed',
  left: '0',
  bottom: '0',
  width: '100%'
}

const Footer = () => {
  return (
    <div style={footerStyle}>
      <div className='card-footer text-muted text-center bg-light'>
        All rights reserved to @Elchay and Avraham
      </div>
    </div>
  );
}
export default Footer;