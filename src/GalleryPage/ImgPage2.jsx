import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { GrClose } from 'react-icons/gr';
import image1 from '../assets/image-2.webp';
import image2 from '../assets/image-8.webp';
import image3 from '../assets/image-9.webp';
import image4 from '../assets/image-11.webp';
import image5 from '../assets/image-21.webp';

export default function ImgPage2() {

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
   ]

   const [model, setModel] = useState(false);
   const [tempimgSrc, setTempImgSrc] = useState('');
   const getImg = (imgSrc) => {
      setTempImgSrc(imgSrc);
      setModel(true);
   }

   const [noOfElement, setnoOfElement] = useState(6);
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
