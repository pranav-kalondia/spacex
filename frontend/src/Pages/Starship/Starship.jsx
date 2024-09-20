import React, { useEffect } from 'react';
import './Starship.css';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { initializeScrollAnimations } from '../../data.js';
function Number({ n }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { number } = useSpring({
    from: { number: 0 },
    number: inView ? n : 0,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return (
    <animated.div ref={ref}>
      {number.to((n) => n.toFixed(0))}
    </animated.div>
  );
}

const Starship = () => {
  useEffect(() => {
    initializeScrollAnimations();  // Reinitialize ScrollReveal for elements like headings and text
  }, []);
  return (
    <div className="Starship">
    <div className="Starshippage1">
      <div className="textfalcon">
        <h1 className="headingfalcon">Starship</h1>
        <h2 className="subheadingfalcon">Service to Earth Orbit, Moon, Mars and Beyond</h2>
      </div>
    </div>

    <div className="numberanimation">
      <div className="specs1">
        <h1><Number n={10} /></h1>
        <h2 className="specs1txt">Total Launches</h2>
      </div>
      <div className="specs1">
        <h1><Number n={19} /></h1>
        <h2 className="specs1txt">Total Landings</h2>
      </div>
      <div className="specs1">
        <h1><Number n={14} /></h1>
        <h2 className="specs1txt">Total Reflights</h2>
      </div>
    </div>

    <div className="Starshippage8">
      <div className="text">
        <h2 className="topheading">Starship Capabilities</h2>
        <h1 className="bottomheading">
        Interplanetary transport revolution
                  </h1>
      </div>
    </div>

    <div className="starshipengineimage">
      <div className="merlin-engine-container">
        <div className="header1">
          <h2></h2>
          <h1>Starship Overview</h1>
        </div>
        <div className="level">
          <span>SEA LEVEL</span> | <span>VACUUM</span>
        </div>
        <div className="description">
          <p>
          SpaceX’s Starship spacecraft and Super Heavy rocket – collectively referred to as Starship – represent a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars and beyond. Starship is the world’s most powerful launch vehicle ever developed, capable of carrying up to 150 metric tonnes fully reusable and 250 metric tonnes expendable.
          </p>
        </div>
        <div className="specs">
          <div className="propellant">
            <p>HEIGHT</p>
            <span>121 m / 397 ft</span>
          </div>
          <div className="thrust">
            <p>DIAMETER</p>
            <span>9 m /  29.5 ft</span>
          </div>
        </div>
      </div>
    </div>

    <div className="lastStarship"></div>

    <div className="blackbox">
      <div className="text5">
        <h1></h1>
      </div>
    </div>
  </div>
  )
}

export default Starship