import React from 'react';
import { Container } from 'react-bootstrap';
import { FiStar } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { FiUser } from "react-icons/fi"

const History = () => {

   return (
      <div className='history'>
         <div className="his-blur"></div>
         <Container>
            <div className="history-item">
               <div className="history-item-title">
                  <h3>Що таке <span>Пляжний Lviv</span></h3>
               </div>
               <div className="history-body">
                  <div className="history-body-item" >
                     <div className="history-body-item-block">
                        <FiSun className='history-body-icon' />
                        <div className="history-body-item-title">365 днів на рік!</div>
                     </div>
                     <div className="history-body-item-subtitle">Пляжний Lviv - це коли твій сезон ще не закінчившись, розпочинається знову. Коли після пляжного сезону випав перший сніг і це означає що настав час зимового волейболу.</div>
                  </div>
                  <div className="history-body-item" >
                     <div className="history-body-item-block">
                        <FiStar className='history-body-icon' />
                        <div className="history-body-item-title">Незабутні турніри!</div>
                     </div>
                     <div className="history-body-item-subtitle">Пляжний Lviv - це коли на місяць вперед знаєш плани на усі свої вихідні. </div>
                  </div>
                  <div className="history-body-item" >
                     <div className="history-body-item-block">
                        <FiUser className='history-body-icon' />
                        <div className="history-body-item-title">Велика сім'я!</div>
                     </div>
                     <div className="history-body-item-subtitle">Пляжний Lviv - це коли ти забуваєш що таке "самотність" та "нудьга", тут тебе чекають круті та веселі однодумці з якими твій настрій гарантований.</div>
                  </div>
               </div>
            </div>
            <div className="hist-blur"></div>
            
         </Container>
      </div>
   )
}

export default History;
