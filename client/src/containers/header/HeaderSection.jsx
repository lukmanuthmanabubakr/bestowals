import "./header.css";
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

const Header = () => (
  <>
    {/* <NavbarMainHome /> */}
    {/* <div className="bestowal__header section__padding" id="home">
      <div className="bestowal__header-content">
        <h1 className="gradient__text">Let&apos;s us know your project idea that you have and bring it to live</h1>
        <p>Never underestimate the power of the people you already know. Family, friends, coworkers and even acquaintances make a great foundation for your campaign community. Our guide will explain how to use your personal network to create a solid base for your crowdfunding audience. </p>

        <div className="bestowal__header-content__input">
          <Link to="/dashboard"><button type="button">Get Started</button></Link>
        </div>

        <div className="bestowal__header-content__people">
          <img src={assets.people} />
          <p>1,640 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className="bestowal__header-image">
        <img src={assets.global1} />
      </div>
    </div>
  <Brand />
  <About />
  <Features />
  <Possibility />
  <Cta />
  <Blog />
  <Contact /> */}

    <section className="headerSections">
      <div className="headerImage">
        <h1 className="earlyAccess">
          Get early access to the ideas of tomorrow
        </h1>
        <p className="industryLeading">
          Highly-vetted Web3 projects you can trust. Supported by
          industry-leading creators and funds.
        </p>

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
    <MarketRange/>
    <Liquidity />
    
  </>
);

export default Header;
