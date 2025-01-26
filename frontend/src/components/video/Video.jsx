import React from "react";
import icon from "../../assets/Display Icon.png"
import icon1 from "../../assets/Display Icon (1).png"
import './Video.css'
import image from "../../assets/shopify.jpg"
const Video = () => {
  return (
    <>
      <div className="video-container">
        <div className="video-left">
          <div className="video-heading">
            <h2>Our Video Introductions</h2>
          </div>
          <div className="video-description">
            <p>
              Velit purus egestas tellus phasellus. Mattis eget sed faucibus
              magna vulputate pellentesque a diam tincidunt apis dui.
            </p>
          </div>
          <div className="video-list">
            <div className="video">
              <div className="video-logo">
                <img src={icon}></img>
              </div>
              <div className="video-text">
                <h2>Explore ideas together</h2>
                <p>
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.
                </p>
              </div>
            </div>
            <div className="video">
              <div className="video-logo">
              <img src={icon1}></img>
              </div>
              <div className="video-text">
                <h2>Bring those ideas to life</h2>
                <p>
                Engage audience segments and finally create actionable insights. Amplify vertical integration.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="video-right">
          <div className="image-div">
            <img src={image}></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;