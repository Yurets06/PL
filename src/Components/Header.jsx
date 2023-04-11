import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from '../assets/Logo.png';

import Home from '../Pages/Home';
import News from '../Pages/News';
import Gallery from '../Pages/Gallery';
import ImgPage1 from '../GalleryPage/ImgPage1';
import ImgPage2 from '../GalleryPage/ImgPage2';
import ImgPage3 from '../GalleryPage/ImgPage3';

const Header = () => {
   return (
      <>
         <Navbar className='header' sticky="top" collapseOnSelect expand='md' variant='dark'>
            <Container>
               <Navbar.Brand href='/'>
                  <img className='d-inline-block align-top logo' src={logo} alt='Logo' />
               </Navbar.Brand>
               <Navbar.Toggle aria-controls='responsive-navbar-nav' />
               <Navbar.Collapse id='responsive-navbar-nav'>
                  <Nav className="ms-auto navibar">
                     <Nav.Link className='navibar-item' href='/'>Головна</Nav.Link>
                     <Nav.Link className='navibar-item' href='/news'>Новини</Nav.Link>
                     <Nav.Link className='navibar-item' href='/gallery'>Галерея</Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>

         <Router>
            <Routes>
               <Route exact path='/' element={<Home />} />
               <Route exact path='/news' element={<News />} />
               <Route exact path='/gallery' element={<Gallery />} />
               <Route exact path='/pageOne' element={<ImgPage1 />} />
               <Route exact path='/pageTwo' element={<ImgPage2 />} />
               <Route exact path='/pageThree' element={<ImgPage3 />} />
            </Routes>
         </Router>
      </>
   )
}

export default Header
