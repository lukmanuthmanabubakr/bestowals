import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./liquidity.css";
import { NavLink } from "react-router-dom";

const liquidity = () => {
  return (
    <section className="liquidity">
      <div className="liquidityHeader" data-aos="fade-right">
        <div className="knowledge">
          <div className="knowledge-content" data-aos="fade-right">
            <h1>Zero knowledge required</h1>
            <p>
              Scroll’s mission is to provide an accessible scaling solution that
              preserves the essence of Ethereum – trust-minimized, secure and
              open source. Like a scroll, our story is constantly evolving in
              our quest to secure Ethereum’s future and making the developer
              experience as easy as possible.
            </p>
          </div>
          <div className="buttonMaker">
            <button>
              <NavLink>Hello making</NavLink>
            </button>
          </div>
        </div>
      </div>

      <div className="liquidityAspectTwo">
        <h1 className="possibleHead">Possibilities</h1>
        <div className="imagination">
          <p className="beyond">The possibilities are beyond your imagination.</p>
          <NavLink to="/about">Explore the Library</NavLink>
        </div>
      </div>
    </section>
  );
};

export default liquidity;
