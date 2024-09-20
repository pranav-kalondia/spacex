import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import './App.css';
import Header from './Component/Header/Header';
import Page1 from './Component/page1/Page1';
import Page2 from './Component/Page2/Page2';
import Page3 from './Component/Page3/Page3';
import Page4 from './Component/Page4/Page4';
import Page5 from './Component/Page5/Page5';
import Page6 from './Component/Page6/Page6';
import Footer from './Component/Footer/Footer';
import Dragon from './Pages/Dragon/Dragon.jsx';
import Falcon9 from './Pages/Falcon9/Falcon9.jsx';
import Falconheavy from './Pages/Falconheavy/Falconheavy.jsx';
import Starship from './Pages/Starship/Starship.jsx';
import { initializeScrollAnimations } from './data.js';

function App() {
  const location = useLocation();

  // Reset scroll position on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    initializeScrollAnimations();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Page1 />
            <Page2 />
            <Page3 />
            <Page4 />
            <Page5 />
            <Page6 />
          </>
        } />
        <Route path="/Dragon" element={<Dragon />} />
        <Route path="/Falcon9" element={<Falcon9 />} />
        <Route path="/Falconheavy" element={<Falconheavy />} />
        <Route path="/Starship" element={<Starship />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
