import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import imageItem1 from '../assets/image-1.webp';
import imageItem2 from '../assets/image-2.webp';
import imageItem3 from '../assets/image-3.webp';
import Tilt from 'react-parallax-tilt';


const galItemData = [
   {
      id: 1, title: 'Благодійний турнір для підтримки ЗСУ!', data: 'ВЕРЕСЕНЬ 14, 2022', imgSr: imageItem1, link: '/pageOne'
   },
   {
      id: 2, title: 'Чемпіонат світу XXI Kaman Cup Masters & Amators', data: 'ЖОВТЕНЬ 6, 2022', imgSr: imageItem2, link: '/pageTwo'
   },
   {
      id: 3, title: 'Чемпіонат області серед дівчат!', data: 'ЖОВТЕНЬ 4, 2022', imgSr: imageItem3, link: '/pageThree'
   },
   
]


const GalleryItem = () => {

   const [noOfElement, setnoOfElement] = useState(3);
   const loadMore = () => {
      setnoOfElement(noOfElement + noOfElement);
   }

   const slice = galItemData.slice(0, noOfElement);

   return (
      <div className='gallery'>
         <div className="blurd"></div>
         <div className="blurg"></div>
         <div className="blurh"></div>
         <Container>
            <div className="cardss">
               {slice.map((item, index) => {
                  return (
                     <Tilt className='hr'>
                        <div className="cardes" key={item.id}>
                           <div className="poster">
                              <img src={item.imgSr} alt="image" />
                           </div>
                           <div className="details">
                              <a href={item.link}><h3 className='details-title'>{item.title}</h3></a>
                              <p className='details-data'>{item.data}</p>
                           </div>
                        </div>
                     </Tilt>
                  )
               })}
               <button className='btn-more' onClick={() => loadMore()}>Більше</button>
            </div>
         </Container>
      </div>
   )
}

export default GalleryItem
