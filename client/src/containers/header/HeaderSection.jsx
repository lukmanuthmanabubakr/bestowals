import React, { useEffect } from 'react'
import "./header.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import assets from "../../assets";
import Brand from "../../components/brand/Brand";
import About from "../about/About";
import Features from "../features/Features";
import Possibility from "../possibility/Possibility";
import Blog from "../blog/Blog";
import Contact from "../contact/Contact";
import Cta from "../../components/cta/Cta";
import { Link, NavLink } from "react-router-dom";
import NavbarMainHome from "../../components/navbar/NavbarMainHome";
import lines1 from "../../assets/linesImage1.png";
import lines2 from "../../assets/layer-slider-line-2-removebg-preview.png";
import { FaArrowRight } from "react-icons/fa6";
import MarketRange from "../../components/MarketRange/MarketRange";
import Liquidity from "../liquidity/Liquidity";
import Creativity from '../Creativity/Creativity';

const Header = () => {
  useEffect(() => {
    AOS.init({duration: "1000", delay: "500"})
  }, [])

  return(
    <>
      <section className="headerSections">
      <div className="headerImage">
        <div data-aos="fade-right">
          <h1 className="earlyAccess">
            Get early access to the ideas of tomorrow
          </h1>
          <p className="industryLeading">
            Highly-vetted Web3 projects you can trust. Supported by
            industry-leading creators and funds.
          </p>
        </div>

        <NavLink to="/hero" className="myHeroPart">
          Go to project{" "}
          <span>
            <FaArrowRight />
          </span>
        </NavLink>

        <img src={lines1} alt="lines1" className="theHeaderImage" />

        <img src={lines2} alt="lines1" className="theHeaderImage2" />
      </div>
    </section>
    <Brand />
    <MarketRange />
    <Liquidity />
    {/* <Possibility />
    <Creativity /> */}
    </>
  )

};

export default Header;
