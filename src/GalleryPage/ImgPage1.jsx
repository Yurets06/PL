import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { GrClose } from 'react-icons/gr';

import image1 from '../assets/image-1.webp';
import image2 from '../assets/image-14.webp';
import image3 from '../assets/image-15.webp';
import image4 from '../assets/image-17.webp';
import image5 from '../assets/image-18.webp';
import image6 from '../assets/image-19.webp';
import image7 from '../assets/image-20.webp';


export default function ImgPage1() {

   let data = [
      {
         id: 1, imgSrc: image1,
      },
      {
         id: 2, imgSrc: image2,
      },
      {
         id: 3, imgSrc: image3,
      },
      {
         id: 4, imgSrc: image4,
      },
      {
         id: 5, imgSrc: image5,
      },
      {
         id: 6, imgSrc: image6,
      },
      {
         id: 7, imgSrc: image7,
      },
   ]

   const [model, setModel] = useState(false);
   const [tempimgSrc, setTempImgSrc] = useState('');
   const getImg = (imgSrc) => {
      setTempImgSrc(imgSrc);
      setModel(true);
   }

   const [noOfElement, setnoOfElement] = useState(7);
   const loadMore = () => {
      setnoOfElement(noOfElement + noOfElement);
   }

   const slice = data.slice(0, noOfElement);

   return (
      <>
         <div className={model ? 'model open' : 'model'}>
            <img src={tempimgSrc} />
            <GrClose onClick={() => setModel(false)} />
         </div>
         <Container>
            <div className='galleryy'>
               {slice.map((item, index) => {
                  return (
                     <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                        <img src={item.imgSrc} style={{ width: '100%' }} />
                     </div>
                  )
               })}
            </div>

            <button className='btn-more' onClick={() => loadMore()}>Більше</button>

         </Container>
      </>
   )
}
