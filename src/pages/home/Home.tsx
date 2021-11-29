import React from "react";
import Roadmap from "../../components/Roadmap/Roadmap";
import Specs from "../../components/Specs/Specs";
import Team from "../../components/Team/Team";
import Welcome from "../../components/Welcome/Welcome";
import gacc from "../../assets/gacc.png";
import Navbar from "../../components/Navbar/Navbar";
import Divider from "../../components/Divider/Divider";
import "./styles.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      <img src={gacc} className="banner" />
      <Welcome />
      <Divider className="divider" />
      <div id="Buy" className="mint-component">
        <h1>BUY AN APE</h1>
        <button>MINT</button>
      </div>
      <Divider className="divider" />
      <Specs />
      <Divider className="half" />
      <Roadmap />
      <Divider />
      <Divider className="divider" />
      <Team />
      <Divider className="divider" />
      <div className="scan-address">
        <h4>VERIFIED SMART CONTRACT ADDRESS: </h4>
        <a> 0x20338f52C7795dc7Ccd4dBb8d1b4112cb6B24f96</a>
      </div>
      <Divider className="half" />
    </div>
  );
};

export default Home;
