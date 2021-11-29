import React from "react";
import "./styles.css";
import gif from "../../assets/ape-gif.gif";

const Specs = () => {
  return (
    <div className="specs">
      <div className="specs-left">
        <h1>THE SPECS</h1>
        <p>
          Each Grandpa Ape is unique and programmatically generated from over
          200 possible traits, including expression, headwear, clothing, and
          more. All apes are spiffy, but some are rarer than others.
        </p>
        <p>
          The apes are stored as ERC-721 tokens on the Ethereum blockchain and
          hosted on IPFS. Purchasing an ape costs 0.08 ETH.
        </p>
      </div>
      <img src={gif} alt="" />
    </div>
  );
};

export default Specs;
