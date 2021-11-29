import React from "react";
import logo from "../../assets/logo.png";
import twitter from "../../assets/twitter.png";
import discord from "../../assets/discord.png";
import opensea from "../../assets/opensea.png";
import "./styles.css";
const Footer = () => {
  return (
    <div className="footer">
      <a href="/">
        <img src={logo} alt="" />
      </a>
      <div>
        <div className="footer-ext-links">
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
        <p>© 2021 Grandpa Ape Country Club. All Rights Reserved.</p>
        <a className="terms-conditions" href="/">
          Terms & Conditions
        </a>
      </div>
    </div>
  );
};

export default Footer;
