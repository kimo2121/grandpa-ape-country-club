import React, { useRef, useState } from "react";
import "./styles.css";
import { HiMenu } from "react-icons/hi";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { Link } from "react-scroll";
import twitter from "../../assets/twitter.png";
import discord from "../../assets/discord.png";
import opensea from "../../assets/opensea.png";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [navbar, setNavbar] = useState(false);
  const changeHeight = (): void => {
    if (window.scrollY > 103) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeHeight);

  const content: any = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  }
  return (
    <div className={navbar ? "navbar height" : "navbar"}>
      <div className="web-nav">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="nav-links">
            <Link activeClass="active" smooth={true} duration={800} to="Mint">
              MINT
            </Link>
            <Link activeClass="active" smooth={true} duration={800} to="Buy">
              BUY AN APE
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              duration={800}
              to="Roadmap"
            >
              ROADMAP
            </Link>
            <Link activeClass="active" smooth={true} duration={800} to="Team">
              TEAM
            </Link>
          </div>
          <div className="external-links">
            <a target="_blank" href="/home">
              <img src={opensea} alt="" />
            </a>
            <a target="_blank" href="https://discord.com/invite/gacc">
              <img src={discord} alt="" />
            </a>
            <a target="_blank" href="https://twitter.com/GrandpaApeCC">
              <img src={twitter} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="slide-menu">
        <div className="slide-outter">
          <div className="logo mobile-logo">
            <img src={logo} alt="" />
          </div>
          <div className="mob-menu-btn">
            <HiMenu
              color="black"
              onClick={toggleAccordion}
              className={menu ? "slide-menu-icon active" : "slide-menu-icon"}
            />
          </div>
        </div>
        <div
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
          className="accordion__content"
        >
          <Link
            activeClass="active"
            onClick={toggleAccordion}
            smooth={true}
            duration={800}
            to="Mint"
          >
            MINT
          </Link>
          <Link
            activeClass="active"
            onClick={toggleAccordion}
            smooth={true}
            duration={800}
            to="Buy"
          >
            BUY AN APE
          </Link>
          <Link
            activeClass="active"
            onClick={toggleAccordion}
            smooth={true}
            duration={800}
            to="Roadmap"
          >
            ROADMAP
          </Link>
          <Link
            activeClass="active"
            onClick={toggleAccordion}
            smooth={true}
            duration={800}
            to="Team"
          >
            TEAM
          </Link>
          <div className="external-links">
            <a target="_blank" href="https://twitter.com/GrandpaApeCC">
              <AiOutlineTwitter />
            </a>
            <a target="_blank" href="https://discord.com/invite/gacc">
              <BsDiscord />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
