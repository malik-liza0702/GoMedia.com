import React from "react";
import "./Services.css";
import svg1 from "../../assets/svg1.png";
import svg2 from "../../assets/svg2.png";
import svg3 from "../../assets/svg3.png";
import svg4 from "../../assets/svg4.png";
import svg5 from "../../assets/svg5.png";
import svg6 from "../../assets/svg6.png";
import svg7 from "../../assets/Symbol (4).png";
function Services() {
  return (
    <>
      <div className="services">
        <div className="services-heading">
          <div className="heading">
            <p>WELCOME TO GOMEDIA.COM</p>
          </div>
          <div className="heading">
            <h3>Explore Our Services</h3>
          </div>
        </div>
        <div className="card-container">
          <div className="card-column">
            <div className="card">
              <div className="symbol">
                <img src={svg1}></img>
              </div>
              <div className="service-heading">
                <h2>Web Development</h2>
              </div>
              <div className="service-description">
                <p>
                  Crafting responsive, scalable, and innovative websites
                  tailored to your business needs.
                </p>
              </div>
              <div className="learn">
                Learn More <img src={svg7}></img>
              </div>
            </div>
            <div className="card">
              <div className="symbol">
                <img src={svg2}></img>
              </div>
              <div className="service-heading">
                <h2>SEO Optimization</h2>
              </div>
              <div className="service-description">
                <p>
                  Enhancing website visibility to rank higher and drive organic
                  traffic through strategic optimization.
                </p>
              </div>
              <div className="learn">
                Learn More <img src={svg7}></img>
              </div>
            </div>
          </div>
          <div className="card-column">
            <div className="card">
              <div className="symbol">
                <img src={svg1}></img>
              </div>
              <div className="service-heading">
                <h2>Application Development</h2>
              </div>
              <div className="service-description">
                <p>
                Building high-performance, user-friendly mobile applications for Android and iOS platforms.
                </p>
              </div>
              <div className="learn">
                Learn More <img src={svg7}></img>
              </div>
            </div>

            <div className="card">
              <div className="symbol">
                <img src={svg4}></img>
              </div>
              <div className="service-heading">
                <h2>UX/UI Design</h2>
              </div>
              <div className="service-description">
                <p>
                  Turn your ideas into modern products with our design experts.
                </p>
              </div>
              <div className="learn">
                Learn More <img src={svg7}></img>
              </div>
            </div>
          </div>
          <div className="card-column">
            <div className="card">
              <div className="symbol">
                <img src={svg6}></img>
              </div>
              <div className="service-heading">
                <h2>Digital Marketing</h2>
              </div>
              <div className="service-description">
                <p>
                Creating impactful online strategies to boost brand awareness and maximize ROI.
                </p>
              </div>
              <div className="learn">
                Learn More <img src={svg7}></img>
              </div>
            </div>
            <div className="card">
              <div className="symbol">
                <img src={svg3}></img>
              </div>
              <div className="service-heading">
                <h2>Online Reputation Management</h2>
              </div>
              <div className="service-description">
                <p>
                  Foster customer relationships by effectively serving your
                  market.
                </p>
              </div>
              <div className="learn">
                Learn More <img src={svg7}></img>
              </div>
            </div>
          </div>
        </div>
        <div className="button-container">
          <button className="homeButton">See All Services</button>
        </div>
      </div>
    </>
  );
}

export default Services;
