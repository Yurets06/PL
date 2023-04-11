import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../assets/pl-logo.webp';

const Footer = () => {
   return (
      <>
         <div className="block-footer mt-auto position-sticky top-100">
            <Container>
               <div className="footer">
                  <div className="footer-item">
                     <div className="footer-item-block">
                        <a href="/"><img src={logo} alt="logo" /></a>
                        <h2 className='footer-item-block-title'>ГО <span>"ПЛЯЖНИЙ ЛЬВІВ"</span></h2>
                     </div>
                  </div>
                  <div className="footer-item">
                     <div className="footer-item-media">
                        <h3 className='footer-item-media-title'>Соціальні мережі</h3>
                        <div className="footer-item-media-subtitle">
                           <div><a href='https://www.facebook.com/profile.php?id=100058955237039' target='_blank'>Facebook</a></div>
                           <div><a href='https://www.instagram.com/plyazhnyi_lviv/' target="_blank">Instagram</a></div>
                        </div>
                     </div>
                  </div>
                  <div className="footer-item">
                     <h3 className="footer-item-contact">Контакти</h3>
                     <div className="footer-item-contact-block">
                        <div className="footer-item-contact-block-title">Мобільний номер</div>
                        <div className="footer-item-contact-block-subtitle">+380999999999</div>
                     </div>
                     <div className="footer-item-contact-block">
                        <div className="footer-item-contact-block-title">Ел. пошта</div>
                        <div className="footer-item-contact-block-subtitle">plyazhnyi_lviv@gmail.com</div>
                     </div>
                     <div className="footer-item-contact-block">
                        <div className="footer-item-contact-block-title">Адреса</div>
                        <div className="footer-item-contact-block-subtitle">м. Львів, вулиця Батуринська, 2</div>
                     </div>
                  </div>
               </div>
            </Container>
            {/* <div className="innfo">
               <Container>
                  <div className="info">
                     <div className="info-item">
                        © 2023 Всі права захищені
                     </div>
                     <div className="info-item">
                        Забороняється копіювання, розповсюдження чи будь-яке інше використання інформації і об'єктів без письмової згоди правовласника.
                     </div>
                     <div className="info-item">
                        Made in Lviv
                     </div>
                  </div>
               </Container>
            </div> */}
            <div className="blurf"></div>
            <div className="blurb"></div>
         </div>
      </>
   )
}

export default Footer;
