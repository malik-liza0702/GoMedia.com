import React from "react";
import "./Why.css";
import symbol1 from "../../assets/Symbol.png";
import symbol2 from "../../assets/Symbol (1).png";
import symbol3 from "../../assets/Symbol (2).png";
import symbol4 from "../../assets/Symbol (3).png";

function Why() {
  const yellow = { color: "#EB8D15" };
  return (
    <>
      <div className="why-container">
        <div className="why-left">
          <div className="left-head">
            <div className="why-heading">
              <p style={yellow}>WHY GOMEDIA.COM</p>
            </div>
            <div className="why-heading">
              <h2>Why Choose GoMedia.com?</h2>
            </div>
            <div className="why-heading">
              <p>
                It is with consistent services and results that build trust with
                the people and that in turn help us to serve the business
                better.
              </p>
            </div>
          </div>
        </div>
        <div className="why-right">
          <div>
            <div className="card-div">
              <div className="card1" id="card2">
                <div className="icon-div">
                  <img src={symbol1}></img>
                </div>
                <div className="text-div">
                  <h3>Confidential & Safe</h3>
                  <p>All your private information is safe with us</p>
                </div>
              </div>
              <div className="card1" id="card3">
                <div className="icon-div">
                  <img src={symbol2}></img>
                </div>
                <div className="text-div">
                  <h3>No Hidden Fee</h3>
                  <p>
                    Everything is put before you with no hidden charges or
                    conditions
                  </p>
                </div>
              </div>
            </div>
            <div className="card-div">
              <div className="card1" id="card4">
                <div className="icon-div">
                  <img src={symbol3}></img>
                </div>
                <div className="text-div">
                  <h3>Expert CA/CS Assistance</h3>
                  <p>Prompt support from our in-house expert professionals</p>
                </div>
              </div>
              <div className="card1" id="card2">
                <div className="icon-div">
                  <img src={symbol1}></img>
                </div>
                <div className="text-div">
                  <h3>Confidential & Safe</h3>
                  <p>All your private information is safe with us</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Why;