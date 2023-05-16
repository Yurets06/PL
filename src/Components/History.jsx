import React from 'react';
import { Container } from 'react-bootstrap';
import { FiStar } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { motion } from 'framer-motion';

const History = () => {

   const textAnimation = {
      hidden: {
         y: 100,
         opacity: 0,
      },
      visible: custom => ({
         y: 0,
         opacity: 1,
         transition: { delay: custom * 0.2 },
      }),
   }

   const featureAnimation = {
      hidden: {
         y: 50,
         opacity: 0,
      },
      visible: custom => ({
         y: 0,
         opacity: 1,
         transition: { delay: custom * 0.2 },
      }),
   }

   return (
      <motion.div initial='hidden' whileInView='visible' viewport={{ amount: 0.2 }} className='history'>
         <div className="his-blur"></div>
         <Container>
            <div className="history-item">
               <div className="history-item-title">
                  <motion.h3 custom={1} variants={textAnimation}>Що таке <span>Пляжний Lviv</span></motion.h3>
               </div>
               <motion.div initial='hidden' whileInView='visible' viewport={{ amount: 0.2 }} className="history-body">
                  <motion.div custom={1} variants={featureAnimation} className="history-body-item" >
                     <div className="history-body-item-block">
                        <FiSun className='history-body-icon' />
                        <div className="history-body-item-title">365 днів на рік!</div>
                     </div>
                     <div className="history-body-item-subtitle">Пляжний Lviv - це коли твій сезон ще не закінчившись, розпочинається знову. Коли після пляжного сезону випав перший сніг і це означає що настав час зимового волейболу.</div>
                  </motion.div>
                  <motion.div custom={2} variants={featureAnimation} className="history-body-item" >
                     <div className="history-body-item-block">
                        <FiStar className='history-body-icon' />
                        <div className="history-body-item-title">Незабутні турніри!</div>
                     </div>
                     <div className="history-body-item-subtitle">Пляжний Lviv - це коли на місяць вперед знаєш плани на усі свої вихідні. </div>
                  </motion.div>
                  <motion.div custom={3} variants={featureAnimation} className="history-body-item" >
                     <div className="history-body-item-block">
                        <FiUser className='history-body-icon' />
                        <div className="history-body-item-title">Велика сім'я!</div>
                     </div>
                     <div className="history-body-item-subtitle">Пляжний Lviv - це коли приходиш на тренування і тут тебе чекають круті та веселі однодумці з якими твій настрій гарантований.</div>
                  </motion.div>
               </motion.div>
            </div>
            <div className="hist-blur"></div>

         </Container>
      </motion.div>
   )
}

export default History;
