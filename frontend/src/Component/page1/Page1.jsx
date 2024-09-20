import React from 'react';
import "./Page1.css";

const Page1 = () => {
  return (
    <div className="page1">
      <div className="text">
        <h2 className="topheading">RECENT LAUNCH</h2>
        <h1 className="bottomheading">Transporter-11<br />Mission</h1>
      </div>
      <div className="wrapper">
        <button><span>Rewatch</span></button>
      </div>
    </div>
  );
}

export default Page1;
