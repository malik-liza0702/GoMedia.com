import React from "react";
import "./Digital.css";
import image from "../../assets/Image (1).png";
import image1 from "../../assets/Image (1).png";
import image2 from "../../assets/Image (2).png";
import image3 from "../../assets/Image (3).png";
import image4 from "../../assets/Image (4).png";
import image5 from "../../assets/Image (5).png";
const Digital = () => {
  return (
    <>
      <div className="digital-container">
        <div className="digital-middle">
          <div className="middle-up">
            <div className="middle-card">
              <div className="card-image">
                <img src={image}></img>
              </div>
              <div className="card-title">
                <h2>Small Busniess and Startup</h2>
              </div>
              <div className="card-description">
                <p>
                  Like to know the secrets of transforming a 2-14 team into a 3x
                  Super Bowl winning Dynasty?
                </p>
              </div>
            </div>
            <div className="middle-card">
              <div className="card-image">
                <img src={image1}></img>
              </div>
              
              <div className="card-title">
                <h2>Scaleup Company Offer</h2>
              </div>
              <div className="card-description">
                <p>
                Mental models are simple expressions of complex processes or relationships.
                </p>
              </div>
              
            </div>
            <div className="middle-card">
              <div className="card-image">
                <img src={image2}></img>
              </div>
              
              <div className="card-title">
                <h2>Growing Bussiness Package</h2>
              </div>
              <div className="card-description">
                <p>
                Introduction to Wireframing and its Principles. Learn from the best in the industry.
                </p>
              </div>
              
            </div>
          </div>
          <div className="middle-up">
            <div className="middle-card">
              <div className="card-image">
                <img src={image3}></img>
              </div>
              
              <div className="card-title">
                <h2>Scale-up Company Offer</h2>
              </div>
              <div className="card-description">
                <p>
                Collaboration can make our teams stronger, and our individual designs better.
                </p>
              </div>
              
            </div>
            <div className="middle-card">
              <div className="card-image">
                <img src={image4}></img>
              </div>
             
              <div className="card-title">
                <h2>Scale-Up Comapny Offer</h2>
              </div>
              <div className="card-description">
                <p>
                JavaScript frameworks make development easy with extensive features and functionalities.
                </p>
              </div>
              
            </div>
            <div className="middle-card">
              <div className="card-image">
                <img src={image5}></img>
              </div>
             
              <div className="card-title">
                <h2>Small Busniess and Startup</h2>
              </div>
              <div className="card-description">
                <p>
                  Like to know the secrets of transforming a 2-14 team into a 3x
                  Super Bowl winning Dynasty?
                </p>
              </div>
              
            </div>
          </div>
        </div>
        <div className="digital-low">
            <button className="homeButton">Show More Blogs</button>
        </div>
      </div>
    </>
  );
};

export default Digital;