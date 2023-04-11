import React from 'react';
import { Container } from 'react-bootstrap';

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

   return (
      <>
         <Container>
            <div className="info">
               {information.map((item, index) => {
                  return (
                     <div className="info-item" key={index}>
                        <div className="info-item-num">{item.num}</div>
                        <div className="info-item-text">{item.text}</div>
                     </div>
                  )
               })}
            </div>
         </Container>
      </>
   )
}

export default WellcomeInfo
