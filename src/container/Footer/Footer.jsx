import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Lorem Ipsum is dummy text used in printing</p>
        <p className="p__opensans">+123 456 789</p>
        <p className="p__opensans">+234 567 8910</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="Footer_logo" />
        <p className="p__opensans">"The best way to find yourself is to lose yourself in the service of others"</p>
        <img src={images.spoon} alt="Spoon" className="spoon__img" style={{ marginTop: 15 }}/>

        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>


      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Friday</p>
        <p className="p__opensans">8:00am - 12:00am</p>
        <p className="p__opensans">Saturday - Sunday</p>
        <p className="p__opensans">7:00am - 11:00am</p>

      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2023 Gericht. All Rights Reserved | <a href="https://samy01.netlify.app">SamY</a></p>
    </div>
  </div>
);

export default Footer;
