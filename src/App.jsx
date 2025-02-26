import React from 'react'
import Nav from './Components/Nav'
import Home from './Components/Home'
import Marquee from './Components/Marque'
import LocomotiveScroll from 'locomotive-scroll';
import AiSection from './Components/AiSection';
import Introduction from './Components/Introduction';

const App = () => {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div>
      <Nav />
      <Home />
      <Marquee />
      <AiSection />
      <Introduction />
    </div>
  )
}

export default App