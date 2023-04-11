import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Container } from 'react-bootstrap';

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

   return (
      <div className='wellcome'>
         <Container>
            <div className="wellcome-item">
               <div className="wellcome-item-title">
                  <h2>Пляжний <span className='linear'>Lviv</span> вітає Вас на <span className='linear'>нашому </span> сайті</h2>
                  <p className='wellcome-subtitle'>Тут ви зможете слідкувати за нашою діяльністю: тренуваннями, турнірами, досягненнями та іншими подіями.</p>
                  <div className="title-blur"></div>
               </div>
               <div className='form'>
                  <h3 className='form-title'>Зворотний зв'язок</h3>
                  <form className='form-item' onSubmit={handleSubmit}>
                     <label className='form-item-block'>
                        <input type="text" name="name" required='required' value={formData.name} onChange={handleChange} />
                        <span>Enter Name</span>
                     </label>
                     <label className='form-item-block'>
                        <input type="email" name="email" required='required' value={formData.email} onChange={handleChange} />
                        <span>Enter Email</span>
                     </label>
                     <label className='form-item-block'>
                        <textarea name="message" required='required' value={formData.message} onChange={handleChange} />
                        <span>Enter Message</span>
                     </label>
                     <button className='form-item-btn' type="submit">Надіслати</button>
                     <div className="shadow"></div>
                  </form>
               </div>
            </div>
            <div className="blur"></div>
            <div className="logo-blur"></div>
         </Container>
      </div>
   )
};

export default Wellcome;
