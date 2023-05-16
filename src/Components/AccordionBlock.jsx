import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Container } from "react-bootstrap";
import { motion } from 'framer-motion';
import { forwardRef } from "react";





const Accordion = ({ data, multiple = false }) => {
   const [active, setActive] = useState(0);

   const acordionAnimation = {
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

   const feathAnimation = {
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

   let acordData = [
      {
         id: 1, title: 'Як потрапити на тренування?', subtitle: `Якщо ти учасник клубу: необхідно заповнити google календар на певний час і день та обрати майданчик для проведення тренування.\nЯкщо ти не учасник клубу: необхідно зв'язатись з адміністратором клубу завчасно та домовитись за дату та час проведення тренування.`
      },
      {
         id: 2, title: 'Як стати учасником клубу?', subtitle: `Щоб стати учасником клубу необхідно зв'язатись з адміністратором для того аби ознайомити вас з усіма правилами нашого клубу а також побувати на одноразовому тренуванні.`
      },
      {
         id: 3, title: 'Яка мета організації?', subtitle: `Нашою метою являється популяризація волейболу в місті Лева і за його межами, створення комфортних умов для занять улюбленою справою для дорослих та дітей, а також проведення змагань з метою гарно та корисно провести час.`
      },
      {
         id: 4, title: 'Скільки часу триває тренування?', subtitle: 'Тривалість одного тренування становить 2 години. '
      },
      {
         id: 5, title: 'Як подати заявку на турнір?', subtitle: `Ви можете написати нам в одній із соціальних мереж, за номером телефону або за допомогою форми < Зворотний зв'язок > на сайті.`
      },
   ]

   return (
      <>
         <div className="cards">
            <Container>
               <motion.div initial='hidden' whileInView='visible' viewport={{ amount: 0.2 }} className="cards-title">
                  <motion.h2 custom={1} variants={acordionAnimation}>Основні <span>питання</span></motion.h2>
               </motion.div>
               <motion.div initial='hidden' whileInView='visible' viewport={{ amount: 0.2 }} className="cards-items">
                  <motion.div className="custom-accordion">
                     {acordData.map((tab, idx) => (
                        <MAccordionItem
                           custom={idx + 1}
                           variants={feathAnimation}
                           key={idx}
                           {...tab}
                           active={active === idx}
                           multiple={multiple}
                           onToggle={(e) => setActive((a) => (a === idx ? "" : idx))}
                        />
                     ))}
                  </motion.div>
               </motion.div>
            </Container>
            <div className="bg-blur"></div>
         </div>
      </>
   );
};

const AccordionItem = forwardRef(({ title, subtitle, active, multiple, onToggle, acordionAnimation, }, ref) => {
   const [visiblity, setVisiblity] = useState(false);

   const isActive = () => (multiple ? visiblity : active);

   const toogleVisiblity = () => {
      setVisiblity((v) => !v);
      onToggle();
   };
   return (
      <>
         <motion.div ref={ref} initial='hidden' whileInView='visible' viewport={{ amount: 0.2 }} className={`card ${isActive() ? "accordion-active" : ""} color-card`}>
            <motion.div custom={1} variants={acordionAnimation} className="card-header" onClick={toogleVisiblity}>
               {title}
               <span className="accordion-icon">
                  <FiChevronDown icon="chevron-right" />
               </span>
            </motion.div>
            <div className="card-body">{subtitle}</div>
         </motion.div>
      </>
   );
});


const MAccordionItem = motion(AccordionItem);


export default Accordion;