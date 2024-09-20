import React, { useEffect } from 'react';
import './Falcon9.css';
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

const Falcon9 = () => {
  useEffect(() => {
    initializeScrollAnimations();  // Reinitialize ScrollReveal for elements like headings and text
  }, []);

  return (
    <div className="falcon9">
      <div className="page1">
        <div className="textfalcon">
          <h1 className="headingfalcon">Falcon 9</h1>
          <h2 className="subheadingfalcon">First Orbital Class Rocket Capable of Reflight</h2>
        </div>
      </div>

      <div className="numberanimation">
        <div className="specs1">
          <h1><Number n={369} /></h1>
          <h2 className="specs1txt">Total Launches</h2>
        </div>
        <div className="specs1">
          <h1><Number n={326} /></h1>
          <h2 className="specs1txt">Total Landings</h2>
        </div>
        <div className="specs1">
          <h1><Number n={301} /></h1>
          <h2 className="specs1txt">Total Reflights</h2>
        </div>
      </div>

      <div className="page8">
        <div className="text">
          <h2 className="topheading">Video</h2>
          <h1 className="bottomheading">Falcon 9 In Flight</h1>
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

      <div className="lastfalcon"></div>

      <div className="blackbox">
        <div className="text5">
          <h1>Falcon 9 launches Dragon to the International Space Station from Launch Complex 39A</h1>
        </div>
      </div>
    </div>
  );
};

export default Falcon9;
