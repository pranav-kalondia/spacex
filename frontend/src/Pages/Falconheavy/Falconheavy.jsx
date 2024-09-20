import React, { useEffect } from 'react';
import './Falconheavy.css';
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
const Falconheavy = () => {
  useEffect(() => {
    initializeScrollAnimations();  // Reinitialize ScrollReveal for elements like headings and text
  }, []);

  return (
    <div className="falconheavy">
    <div className="falconheavypage1">
      <div className="textfalcon">
        <h1 className="headingfalcon3">Falcon Heavy</h1>
        <h2 className="subheadingfalcon">Over 5 Million Lbs of Thrust</h2>
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

    <div className="falconheavypage8">
      <div className="text">
        <h2 className="topheading">Video</h2>
        <h1 className="bottomheading">VIDEO Falcon Heavy<br/> First Flight</h1>
      </div>
    </div>

    <div className="engineimage">
      <div className="merlin-engine-container">
        <div className="header1">
          <h2>ENGINES</h2>
          <h1>MERLIN</h1>
        </div>
        <div className="level">
          <span>SEA LEVEL</span> | <span>VACUUM</span>
        </div>
        <div className="description">
          <p>
            Merlin is a family of rocket engines developed by SpaceX for use on its
            Falcon 1, Falcon 9 and Falcon Heavy launch vehicles. Merlin engines use
            a rocket grade kerosene (RP-1) and liquid oxygen as rocket propellants in
            a gas-generator power cycle. The Merlin engine was originally designed for
            recovery and reuse.
          </p>
        </div>
        <div className="specs">
          <div className="propellant">
            <p>PROPELLANT</p>
            <span>LOX / RP-1</span>
          </div>
          <div className="thrust">
            <p>THRUST</p>
            <span>845 kN / 190,000 lbf</span>
          </div>
        </div>
      </div>
    </div>

    <div className="lastfalconheavy"></div>

    <div className="blackbox">
      <div className="text5">
        <h1>Falcon Heavy vertical at Kennedy Space Center</h1>
      </div>
    </div>
  </div>
  )
}

export default Falconheavy;