import React from "react";
import "./styles.css";
import gacc from "../../assets/gacc.png";
import twitter from "../../assets/twitter.png";
import discord from "../../assets/discord.png";
import opensea from "../../assets/opensea.png";
import logo from "../../assets/logo.png";

const Landing = () => {
  function landingPage() {
    window.location.replace("/");
  }
  return (
    <div className="landing">
      <div className="landing-nav">
        <div></div>
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <div className="ext-landing">
          <a href="/">
            <img src={opensea} alt="" />
          </a>
          <a href="/">
            <img src={twitter} alt="" />
          </a>
          <a href="/">
            <img src={discord} alt="" />
          </a>
        </div>
      </div>
      <div className="enter-container">
        <img src={gacc} alt="" />
        <div className="enter">
          <h1>
            WELCOME TO <br />
            THE GRANDPA APE <br /> COUNTRY CLUB
          </h1>
          <a href="/home">ENTER</a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
