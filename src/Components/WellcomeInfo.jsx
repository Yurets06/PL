import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

const WellcomeInfo = () => {

   let information = [
      {
         id: 1, num: '30+', text: 'Проведених турнірів',
      },
      {
         id: 2, num: '110+', text: 'Осіб в нашому клубі',
      },
      {
         id: 3, num: '3+', text: 'Роки ми з вами',
      },
   ]

   const infoAnimation = {
      hidden: {
         y: 30,
         opacity: 0,
      },
      visible: custom => ({
         y: 0,
         opacity: 1,
         transition: { delay: custom * 0.2 },
      }),
   }

   return (
      <>
         <Container>
            <motion.div initial='hidden' whileInView='visible' viewport={{ amount: 0.2 }} className="info">
               {information.map((item, index) => {
                  return (
                     <motion.div custom={index + 1} variants={infoAnimation} className="info-item" key={index}>
                        <div className="info-item-num">{item.num}</div>
                        <div className="info-item-text">{item.text}</div>
                     </motion.div>
                  )
               })}
            </motion.div>
         </Container>
      </>
   )
}

export default WellcomeInfo
