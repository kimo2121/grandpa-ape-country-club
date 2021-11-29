import React from "react";
import "./styles.css";
import member1 from "../../assets/member1.jpg";
import member2 from "../../assets/member2.jpg";
const Team = () => {
  return (
    <div id="Team" className="team">
      <div className="team-left">
        <h1>team</h1>
        <p>
          GACC was created by two friends who set out to make some spiffy apes,
          test our skills, and try to build something (very silly).
        </p>
        <p>
          <span>ASLAN.</span>
          POKEMON MASTER. HARD DEGEN.
        </p>
        <p>
          <span>KUCHUYA.</span>
          FORCED TO BE BROUGHT ALONG…… ALSO EXTREMELY HANDSOME.
        </p>
      </div>
      <div className="team-right">
        <img src={member1} alt="" />
        <img src={member2} alt="" />
      </div>
    </div>
  );
};

export default Team;
