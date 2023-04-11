import React from 'react';
import Wellcome from '../Components/Wellcome';
import BlockFixed from '../Components/BlockFixed';
import WellcomeInfo from '../Components/WellcomeInfo';
import History from '../Components/History';
import AccordionBlock from '../Components/AccordionBlock';
import Partners from '../Components/Partners';


const Home = () => {
   return (
      <>
         <Wellcome />
         <WellcomeInfo />
         <BlockFixed />
         <History />
         <AccordionBlock />
         <Partners />
      </>
   )
}

export default Home;
