import React from "react";
import ape1 from "../../assets/ape1.jpg";
import ape2 from "../../assets/ape2.jpg";
import ape3 from "../../assets/ape3.jpg";
import ape4 from "../../assets/ape4.jpg";
import "./styles.css";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome-left">
        <h1>
          WELCOME TO THE <br /> GRANDPA APE COUNTRY CLUB
        </h1>
        <p>
          GACC is a collection of 10,000 Bored Ape NFTs—unique digital
          collectibles living on the Ethereum blockchain. Your Bored Ape doubles
          as your Yacht Club membership card, and grants access to members-only
          benefits, the first of which is access to THE BATHROOM, a
          collaborative graffiti board. Future areas and perks can be unlocked
          by the community through roadmap activation.
        </p>
      </div>
      <div className="welcome-right">
        <img src={ape1} alt="" />
        <img src={ape2} alt="" />
        <img src={ape3} alt="" />
        <img src={ape4} alt="" />
      </div>
    </div>
  );
};

export default Welcome;
