import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { GrClose } from "react-icons/gr";
import imag1 from '../assets/image-6.webp';
import imag2 from '../assets/image-4.webp';
import imag3 from '../assets/image-7.webp';
import imag4 from '../assets/image-3.webp';
import imag5 from '../assets/image-1.webp';
import imag6 from '../assets/image-2.webp';


const NewsBlock = () => {

   const cardMain = [
      {
         id: 1, imag: imag1, title: 'Зимовому волейболу бути!', subTitle: 'Завершився І тур Чемпіонату України з волейболу на снігу 2022 у місті Трускавець! Наш клуб представляли 3️ жіночі і 5️ чоловічих команд «Пляжний Lviv»', date: 'Truskavets 07.02.2022'
      },
      {
         id: 2, imag: imag2, title: 'Корпоратив 2021', subTitle: 'Громадська організація «Пляжний LVIV» вітає всіх з наступаючими Новорічними святами.', date: 'Lviv 31.12.2021'
      },
      {
         id: 3, imag: imag3, title: 'Жіночий турнір!', subTitle: 'Провели крутезний жіночий турнір, спільними зусиллями в сумі ми зібрали 5 000 гривень🔥 Ці кошти, як і було обіцяно, ми перевели на допомогу нашим героям, нашим ЗСУ.', date: 'Lviv 19.07.2022'
      },
      {
         id: 4, imag: imag4, title: 'ВЖЕ ДВІЧІ!', subTitle: 'Другий рік поспіль представниці «Пляжного Львова» у складі команди НУ «Львівська політехніка» здобувають почесне 🥇 місце на обласних змаганнях Львівщини.', date: 'Lviv 04.10.2022'
      },
      {
         id: 5, imag: imag5, title: 'Благодійний MIX турнір', subTitle: 'Навіть проливний дощ не став на заваді наших учасниках. Разом з учасниками та нашими спонсорами нам вийшло зібрати 5000 грн.', date: 'Lviv 14.09.2022'
      },
      {
         id: 6, imag: imag6, title: 'Чемпіонат світу XXI Kaman Cup Masters & Amators', subTitle: 'Наш клуб «Пляжний LVIV» гідно представивши місто Львів та Україну в цілому на цих змаганнях, посів 🥇 місце.', date: 'Poland 06.10.2022'
      },
   ]

   const [modal, setModal] = useState(false);
   const [temImag, setTempImag] = useState('');
   const [temText, setTemText] = useState('');
   const [temsubText, setTemsubText] = useState('');
   const [temDate, setTemDate] = useState('');
   const getImag = (imag, title, subtitle, date) => {
      setTempImag(imag);
      setTemText(title);
      setTemsubText(subtitle);
      setTemDate(date);
      setModal(true);
   }

   const [noOfElement, setnoOfElement] = useState(4);
   const loadMore = () => {
      setnoOfElement(noOfElement + noOfElement);
   }

   const slice = cardMain.slice(0, noOfElement);

   return (
      <>
         <div className={modal ? 'modal open' : 'modal'} >
            <span className='rg'></span>
            <span className='ra'></span>
            <span className='ro'></span>
            <Container>
               <div className="modall">
                  <div className="modal-image">
                     <img src={temImag} alt="" />
                  </div>
                  <div className="modal-text">
                     <h3>{temText}</h3>
                     <p>{temsubText}</p>

                     <span>{temDate}</span>
                  </div>
               </div>
            </Container>
            <GrClose onClick={() => setModal(false)} />
         </div>
         <Container>
            <div className="news" >
               <span className='rg'></span>
               <span className='ra'></span>
               <span className='rf'></span>
               {slice.map((item, index) => {
                  return (
                     <>
                        <div className='item' key={item.id} onClick={() => getImag(item.imag, item.title, item.subTitle, item.date)} >
                           <div className="item-image" >
                              <img src={item.imag} alt="image" />
                           </div>
                           <div className="item-body">
                              <h3 className='item-body-title'>{item.title}</h3>
                              <p className='item-body-subtitle'>{item.subTitle}</p>
                              <p className='item-body-date'>{item.date}</p>
                           </div>
                        </div>
                     </>
                  )
               })}
            </div>
            <button className='btn-more' onClick={() => loadMore()}>Більше</button>
         </Container>
      </>
   )
}

export default NewsBlock;
