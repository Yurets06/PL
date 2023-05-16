import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';



const Wellcome = () => {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
   });

   const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = (event) => {
      event.preventDefault();

      // Відправити форму за допомогою emailjs
      emailjs.sendForm('service_42iy49q', 'template_wgefezc', event.target, 'kKrNoCCkFXYQ4__km')
         .then((result) => {
            console.log(result.text);
         }, (error) => {
            console.log(error.text);
         });

      // Очистити поля форми після відправки
      setFormData({ name: '', email: '', message: '' });
   };


   const textAnimation = {
      hidden: {
         x: -100,
         opacity: 0,
      },
      visible: custom => ({
         x: 0,
         opacity: 1,
         transition: { delay: custom * 0.2 },
      }),
   }

   const formAnimation = {
      hiddens: {
         y: 50,
         opacity: 0,
      },
      visibles: custom => ({
         y: 0,
         opacity: 1,
         transition: { delay: custom * 0.2 },
      }),
   }

   return (
      <div className='wellcome'>
         <Container>
            <div className="wellcome-item">
               <motion.div initial='hidden' whileInView='visible' className="wellcome-item-title">
                  <motion.h2 custom={1} variants={textAnimation} >Пляжний <span className='linear'>Lviv</span> вітає Вас на <span className='linear'>нашому </span> сайті</motion.h2>
                  <motion.p custom={2} variants={textAnimation} className='wellcome-subtitle'>Тут ви зможете слідкувати за нашою діяльністю: тренуваннями, турнірами, досягненнями та іншими подіями.</motion.p>
                  <div className="title-blur"></div>
               </motion.div>
               <motion.div initial='hiddens' whileInView='visibles' className='form'>
                  <motion.h3 custom={1} variants={formAnimation} className='form-title'>Зворотний зв'язок</motion.h3>
                  <motion.form className='form-item' onSubmit={handleSubmit}>
                     <motion.label custom={1} variants={formAnimation} className='form-item-block'>
                        <input type="text" name="name" required='required' value={formData.name} onChange={handleChange} />
                        <span>Enter Name</span>
                     </motion.label>
                     <motion.label custom={1} variants={formAnimation} className='form-item-block'>
                        <input type="email" name="email" required='required' value={formData.email} onChange={handleChange} />
                        <span>Enter Email</span>
                     </motion.label>
                     <motion.label custom={1} variants={formAnimation} className='form-item-block'>
                        <textarea name="message" required='required' value={formData.message} onChange={handleChange} />
                        <span>Enter Message</span>
                     </motion.label>
                     <motion.button custom={1} variants={formAnimation} className='form-item-btn' type="submit">Надіслати</motion.button>
                     <div className="shadow"></div>
                  </motion.form>
               </motion.div>
            </div>
            <div className="blur"></div>
            <div className="logo-blur"></div>
         </Container >
      </div >
   )
};

export default Wellcome;
