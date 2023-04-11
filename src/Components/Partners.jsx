import React from 'react';
import { Container } from 'react-bootstrap';
import img1 from '../assets/pl-logo.webp';
import img2 from '../assets/sm-logo.webp';
import img3 from '../assets/dc-logo.webp';
import img4 from '../assets/tm-logo.webp';
import img5 from '../assets/st-logo.webp';
import img6 from '../assets/mh-logo.webp';
import img7 from '../assets/gr-logo.webp';
import img8 from '../assets/hg-logo.webp';

const partData = [
   {
      id: 1, srcImg: img1, alt: 'Пляжний Львів'
   },
   {
      id: 2, srcImg: img2, alt: 'Smaki Maki'
   },
   {
      id: 3, srcImg: img3, alt: 'DC Link'
   },
   {
      id: 4, srcImg: img4, alt: 'Taka Maka'
   },
   {
      id: 5, srcImg: img5, alt: 'Стоматологія доктора Христенка'
   },
   {
      id: 6, srcImg: img6, alt: 'Моя хата'
   },
   {
      id: 7, srcImg: img7, alt: 'Gorgany'
   },
   {
      id: 8, srcImg: img8, alt: 'High Garden'
   },

]

const Partners = () => {
   return (
      <div>
         <div className="part">
            <Container>
               <div className="partners">
                  <div className="partners-item">
                     {partData.map((item, index) => {
                        return (
                           <img key={item} className='partners-item-image' src={item.srcImg} alt={item.alt}/>
                        )
                     })}
                  </div>
               </div>
            </Container>
            <div className="blurr"></div>
            <div className="blurs"></div>
         </div>
      </div>
   )
}

export default Partners
