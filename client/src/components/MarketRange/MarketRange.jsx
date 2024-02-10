import React from "react";
import "./MarketRange.css";

const MarketRange = () => {
  
  return (
    <div className="marketRange" data-aos="fade-up">
      <div className="theMarketRange">
        <div>
          <p className="money">$49.7M</p>
          <p className="source">RAISED CAPITAL</p>
        </div>
        <div>
          <p className="money">112</p>
          <p className="source">IDEAS FUNDED</p>
        </div>
        <div>
          <p className="money">$883M</p>
          <p className="source">PROJECTS MKT CAP</p>
        </div>
        <div>
          <p className="money">35,900</p>
          <p  className="source">UNIQUE PARTICIPANTS</p>
        </div>
      </div>
    </div>
  );
};

export default MarketRange;



