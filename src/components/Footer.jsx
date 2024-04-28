import React from 'react';
import { CopyrightOutlined, Facebook, Instagram, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="leftFooter">
       <h2>Hakims livs.</h2>
        <h3>Beskrivning</h3>
        <p>
          HakimLivs är en online matbutik som erbjuder ett brett utbud av färska livsmedel och dagligvaror för kundernas bekvämlighet. Med högkvalitativa produkter och snabb leverans strävar HakimLivs efter att förenkla matinköp och göra det möjligt för kunder att handla matvaror när som helst och var som helst. Med en intuitiv webbplats eller mobilapp kan kunderna enkelt bläddra bland olika kategorier av matvaror, lägga till önskade produkter i sin kundvagn och snabbt genomföra sina inköp med säker betalning online.
        </p>
      </div>
      <div className="centerFooter">
      <CopyrightOutlined /> 1920 Copyright: HakimLivs.com
      </div>
      <div className="rightFooter">
        <Twitter /> <Instagram /> <Facebook />
        <br/>
        <iframe title="google maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2039.4581423778014!2d18.013436599999998!3d59.36108619999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9dbcfe860b33%3A0xb774e322f92c3f!2sOlle%20Olsson%20Hagalund-museet!5e0!3m2!1sen!2sse!4v1630407012800!5m2!1sen!2sse" width="200" height="150" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
      </div>
    </footer>
  );
};

export default Footer;
