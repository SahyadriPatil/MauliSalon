import React from "react";
import "../styles/OurTeam.css";
import pf1 from "../assets/profile-img-1.png";
import pf2 from "../assets/profile-img-2.png";
import pf3 from "../assets/profile-img-3.png";
const OurTeam = () => {
  return (
    <section>
      <div class="row">
        <h1>Our Key Members</h1>
      </div>
      <div class="row" style={{ padding: "2em 1em", textAlign: "center" }}>
        {/* <!-- Column 1--> */}
        <div class="column">
          <div class="card" style={{ margin: "auto" }}>
            <div class="img-container">
              <img src={pf2} />
            </div>
            <h3>Mukund Jadhav</h3>
            <p>Founder / CEO</p>
            <div className="info">
              Mukund Jadhav, the Founder and CEO of Mauli Unisex Salon n Spa, is
              a visionary leader with a passion for beauty and wellness. With
              years of industry experience, his expertise and guidance have
              shaped Mauli into a premier destination. Committed to excellence,
              Mukund ensures exceptional services and a luxurious experience for
              every client.
            </div>
          </div>
        </div>
        {/* <!-- Column 2--> */}
        <div class="column">
          <div class="card" style={{ margin: "auto" }}>
            <div class="img-container">
              <img src={pf1} />
            </div>
            <h3>Mrs. Jadhav</h3>
            <p>Co-founder / CTO</p>
            <div className="info">
              Mrs. Jadhav, the Co-founder and CTO of Mauli Unisex Salon n Spa,
              is a driving force behind the brand's success. With her astute
              business acumen and technological expertise, she has played a
              pivotal role in shaping the salon's operations and digital
              presence. Her dedication ensures a seamless experience for our
              valued clients.
            </div>
          </div>
        </div>
        {/* <!-- Column 3--> */}
        <div class="column">
          <div class="card" style={{ margin: "auto" }}>
            <div class="img-container">
              <img src={pf3} />
            </div>
            <h3>Hope Watkins</h3>
            <p>Designer</p>
            <div className="info">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              voluptatibus asperiores id. Voluptatum ipsum inventore sunt
              deserunt, error expedita aperiam omnis eligendi? Qui reiciendis
              velit fugit cum adipisci, error cumque enim aliquam, recusandae
              provident, in quasi reprehenderit deleniti ullam ea modi aliquid?
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
