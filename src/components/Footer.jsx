

import { CopyrightOutlined, Facebook, Instagram, Twitter, Pinterest  } from '@mui/icons-material';
import React from 'react';

const Footer = () => {
  return (
    <div >
    <footer className="footer-container">
        <div className="leftFooter"> <h2>Hakims livs.</h2> <h3>Beskrivning</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A odit cupiditate error deleniti sequi est dignissimos tenetur dolore officia quo, facilis dolorem pariatur eveniet provident eos! Eos, mollitia. Id, iusto.</p> </div>
        
        
        <div className="centerFooter"> <CopyrightOutlined/> 1920 Copyright: HakimLivs.com </div>
       
       
       
        <div className="rightFooter"> <Pinterest/> <Twitter/> <Instagram/> <Facebook/> </div>
    
    </footer>
    </div>
  );
};

export default Footer;
