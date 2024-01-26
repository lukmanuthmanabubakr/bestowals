import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./liquidity.css";
import { NavLink } from "react-router-dom";

import pest_1 from "../../assets/pest_1.jpeg";
import pest_2 from "../../assets/pest__2.jpeg";
import pest_3 from "../../assets/pest_3.jpeg";

const liquidity = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

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
          <div className="buttonMaker" data-aos="fade-left">
            <button>
              <NavLink>Hello making</NavLink>
            </button>
          </div>
        </div>
      </div>
      <div className="card-group">
        <div className="card">
          <img src={pest_1} alt="pest_1 " />
          <div className="layer"></div>
          <div className="info">
            <h1>SingaPore</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              eveniet pariatur harum excepturi amet saepe placeat, eaque
              officiis dignissimos beatae?
            </p>
            <button>Explore</button>
          </div>
        </div>
        <div className="card">
          <img src={pest_2} alt="pest_1 " />
          <div className="layer"></div>
          <div className="info">
            <h1>SingaPore</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              eveniet pariatur harum excepturi amet saepe placeat, eaque
              officiis dignissimos beatae?
            </p>
            <button>Explore</button>
          </div>
        </div>
        <div className="card">
          <img src={pest_3} alt="pest_1 " />
          <div className="layer"></div>
          <div className="info">
            <h1>SingaPore</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              eveniet pariatur harum excepturi amet saepe placeat, eaque
              officiis dignissimos beatae?
            </p>
            <button>Explore</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default liquidity;
