import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
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

const partAnimation = {
   hidden: {
      opacity: 0,
   },
   visible: custom => ({
      opacity: 1,
      transition: { delay: custom * 0.1 },
   }),
}

const Partners = () => {
   return (
      <motion.div initial='hidden' whileInView='visible' viewport={{ amount: 0.1 }} >
         <motion.div custom={1} variants={partAnimation} className="part">
            <Container>
               <div className="partners">
                  <motion.div className="partners-item">
                     {partData.map((item, index) => {
                        return (
                           <motion.img custom={index + 1} variants={partAnimation} key={item} className='partners-item-image' src={item.srcImg} alt={item.alt} />
                        )
                     })}
                  </motion.div>
               </div>
            </Container>
            <div className="blurr"></div>
            <div className="blurs"></div>
         </motion.div>
      </motion.div>
   )
}

export default Partners
