import React from "react";
import Navbar from "../../components/navbar/Navbar";
import home from "../../assets/blogs.jpg"
import media from "../../assets/media.jpg"
import "./Home.css";
import Services from "../../components/services/Services";
import Why from "../../components/why-us/Why";
import Digital from "../../components/digital-transformation/Digital";
import Testimonials from "../../components/testimonials/Testimonials";
import Faq from "../../components/faq/Faq";
import Footer from "../../components/footer/Footer";
const Home = () => {
  return (
    <>
      <div className="container">
        {/* Navbar */}
        <Navbar></Navbar>
        <div className="home-image">
          <img src={home} className="home-image"></img>
          <div className="home-div">
            <h1>Revolutionalize the art of Advanced  Digital Solutions</h1>
            <div className="home-buttons">
              <button className="homeButton">Learn More</button>
              
            </div>
          </div>
        </div>
        <div className="media-description">
          <div className="media-left">
            <p className="mediaa">About GOMEDIA.COM</p>
            <h2>How GoMedia.com can help your Business Grow?</h2>
            <p>GoMedia.com is your ultimate destination for advanced digital solutions tailored to help businesses thrive in the digital era. We specialize in offering a comprehensive suite of services that empower companies to build a strong online presence, enhance customer engagement, and drive business growth. At GoMedia.com, innovation meets functionality, creating cutting-edge solutions that are as visually captivating as they are efficient.</p>
            <br></br>
            <p>Our mission is to transform your ideas into digital reality by leveraging the latest technologies, creative designs, and strategic marketing insights. Whether you're a startup looking to establish your brand or an established enterprise aiming to expand your digital footprint, GoMedia.com is your trusted partner.</p>
          </div>
          <div className="media-right">
            <div className="media-right-image">
              <img src={media} className="media-image"></img>
            </div>
          </div>
        </div>
        {/* Services */}
        <Services></Services>
        {/* why-us */}
        <Why></Why>
        {/* leaders-container */}
        <div className="leaders">
          <div className="leaders-heading">
            <h2>We’re a Results-Driven Digital Marketing Agency</h2>
          </div>
          <div className="leaders-description">
            <p>At GoMedia, we take a strategy-first approach to show you real results. Our digital marketing team goes above and beyond to ensure our web marketing campaigns do not just drum up new business for our clients but also support sustainable success.</p>
          </div>
          {/* Digital Transformation */}
          <Digital></Digital>
        </div>
        {/* Testimonials */}
        <Testimonials></Testimonials>
        {/* Faq's */}
        <Faq></Faq>
        {/*  */}
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
