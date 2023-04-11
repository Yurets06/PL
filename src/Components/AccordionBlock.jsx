import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Container } from "react-bootstrap";


const Accordion = ({ data, multiple = false }) => {
   const [active, setActive] = useState(0);

   let acordData = [
      {
         id: 1, title: 'Як потрапити на тренування?', subtitle: `Якщо ти учасник клубу: необхідно заповнити google календар на певний час і день та обрати майданчик для проведення тренування.\nЯкщо ти не учасник клубу: необхідно зв'язатись з адміністратором клубу завчасно та домовитись за дату та час проведення тренування.`
      },
      {
         id: 2, title: 'Як стати учасником клубу?', subtitle: `Щоб стати учасником клубу необхідно зв'язатись з адміністратором для того аби ознайомити вас з усіма правилами нашого клубу.`
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
               <div className="cards-title">
                  <h2>Основні <span>питання</span></h2>
               </div>
               <div className="cards-items">
                  <div className="custom-accordion">
                     {acordData.map((tab, idx) => (
                        <AccordionItem
                           key={idx}
                           {...tab}
                           active={active === idx}
                           multiple={multiple}
                           onToggle={(e) => setActive((a) => (a === idx ? "" : idx))}
                        />
                     ))}
                  </div>
               </div>
            </Container>
            <div className="bg-blur"></div>
         </div>
      </>
   );
};

const AccordionItem = ({ title, subtitle, active, multiple, onToggle }) => {
   const [visiblity, setVisiblity] = useState(false);

   const isActive = () => (multiple ? visiblity : active);

   const toogleVisiblity = () => {
      setVisiblity((v) => !v);
      onToggle();
   };

   return (
      <>
         <div className={`card ${isActive() ? "accordion-active" : ""} color-card`}>
            <div className="card-header" onClick={toogleVisiblity}>
               {title}
               <span className="accordion-icon">
                  <FiChevronDown icon="chevron-right" />
               </span>
            </div>
            <div className="card-body">{subtitle}</div>
         </div>
      </>
   );
};

export default Accordion;