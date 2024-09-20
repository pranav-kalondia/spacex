import React, { useEffect } from 'react'; // Added useEffect
import './Dragon.css';
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

const Dragon = () => {
  useEffect(() => {
    initializeScrollAnimations(); // Reinitialize ScrollReveal for elements like headings and text
  }, []);

  return (
    <div className="Dragon">
      {/* Page 1 - Dragon Heading Section */}
      <div className="Dragonpage1">
        <div className="textfalcon">
          <h1 className="headingfalcon">Dragon</h1>
          <h2 className="subheadingfalcon">Sending Humans and Cargo Into Space</h2>
        </div>
      </div>

      {/* Number Animation Section */}
      <div className="numberanimation">
        <div className="specs1">
          <h1><Number n={47} /></h1>
          <h2 className="specs1txt">Total Launches</h2>
        </div>
        <div className="specs1">
          <h1><Number n={42} /></h1>
          <h2 className="specs1txt">Total Landings</h2>
        </div>
        <div className="specs1">
          <h1><Number n={26} /></h1>
          <h2 className="specs1txt">Total Reflights</h2>
        </div>
      </div>

      {/* Video Section */}
      <div className="page10">
        <div className="text">
          <h2 className="topheading">Video</h2>
          <h1 className="bottomheading">Crew Dragon<br/> Interior</h1>
        </div>
      </div>

      {/* Engine Section */}
      <div className="dragonengineimage">
        <div className="merlin-engine-container">
          <div className="header1">
            <h2>ENGINES</h2>
            <h1>Draco</h1>
          </div>
          <div className="level">
            <span>DRACO</span> | <span>SUPERDRACO</span>
          </div>
          <div className="description">
            <p>
              The Dragon spacecraft is equipped with 16 Draco thrusters used to orient the spacecraft during the mission, including apogee/perigee maneuvers, orbit adjustment, and attitude control. Each Draco thruster is capable of generating 90 pounds of force in the vacuum of space.
            </p>
          </div>
          <div className="specs">
            <div className="propellant">
              <p>NUMBER OF ENGINES</p>
              <span>16</span> {/* Updated number of engines */}
            </div>
            <div className="thrust">
              <p>THRUST IN VACUUM</p>
              <span>400 N / 90 lbf</span>
            </div>
          </div>
        </div>
      </div>

      <div className="lastdragon"></div>
      <div className="blackbox">
        <div className="text5">
          <h1>Dragon on pad at launch complex 39A</h1>
        </div>
      </div>
    </div>
  );
};

export default Dragon;
