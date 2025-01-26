import React from "react";
import media from "../../assets/media.jpg";
import go from "../../assets/phone2.png";
import shopify from "../../assets/shopify.jpg";
import Navbar from "../../components/navbar/Navbar";
import Video from "../../components/video/Video";
import './Whyus.css';
import Footer from "../../components/footer/Footer";
const card = [
  {
    number: "01",
    title: "Fully Responsive Web Design",
    description:
      "Our mobile-first code architecture ensures your site looks great and functions seamlessly on any device. ",
  },
  {
    number: "02",
    title: "Compelling Copy",
    description:
      "Our content marketing team is top tier. And we use WordPress CMS - the #1 content management system on the internet guarantees reliability. ",
  },
  {
    number: "03",
    title: "Stunning Design",
    description:
      "Go Media's talented team leverages their passion for art and creativity with every Cleveland web design, logo, branding, and content management project.",
  },
  {
    number: "04",
    title: "SEO Friendly",
    description:
      "SEO-friendly WordPress with Yoast, the #1 SEO plugin, are sure to drive traffic to your website.  ",
  },
  {
    number: "05",
    title: "Easy Editing",
    description:
      "Go Media's Page Builder tool makes editing easier than you can imagine. ",
  },
  {
    number: "06",
    title: "Cool Employees",
    description:
      "Business is easier when you work with people you like. Let's have some fun.",
  },
];
function Whyus() {
  return (
    <>
      <div className="choose-us">
        <Navbar></Navbar>
        <div className="media-description">
          <div className="media-left">
            <p className="mediaa">About GOMEDIA.COM</p>
            <h2>How GoMedia.com can help your Business Grow?</h2>
            <p>
              GoMedia.com is your ultimate destination for advanced digital
              solutions tailored to help businesses thrive in the digital era.
              We specialize in offering a comprehensive suite of services that
              empower companies to build a strong online presence, enhance
              customer engagement, and drive business growth. At GoMedia.com,
              innovation meets functionality, creating cutting-edge solutions
              that are as visually captivating as they are efficient.
            </p>
            <br></br>
            <p>
              Our mission is to transform your ideas into digital reality by
              leveraging the latest technologies, creative designs, and
              strategic marketing insights. Whether you're a startup looking to
              establish your brand or an established enterprise aiming to expand
              your digital footprint, GoMedia.com is your trusted partner.
            </p>
          </div>
          <div className="media-right">
            <div className="media-right-image">
              <img src={media} className="media-image"></img>
            </div>
          </div>
        </div>
        <div className="choose-media">
          <div className="choose-up">
            <h1>Why Choose GoMedia.com?</h1>
            <p>
              Our midwestern work ethic and moral character are good starting
              points, but here are a few technical reasons too:
            </p>
          </div>
          <div className="choose-middle">
            <div className="choose-middle-left">
              <img src={go}/>
            </div>
            <div className="middle-container">
              {card.map((card) => (
                <div className="middle-cards">
                  <div className="middle-number">
                    <h1>{card.number}</h1>
                  </div>
                  <div className="middle-description">
                    <h2 >{card.title}</h2>
                    <p>{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Video */}
        <Video></Video>
        {/* stats */}
        <section class="stats-section">
    <div class="stats-containerdiv">
        <div class="stats-container">
            <div class="stat-box">
                <h3 class="stat-number">500+</h3>
                <p class="stat-label">Users Served</p>
            </div>
            <div class="stat-box">
                <h3 class="stat-number">200+</h3>
                <p class="stat-label">Projects Completed</p>
            </div>
            <div class="stat-box">
                <h3 class="stat-number">98%</h3>
                <p class="stat-label">Client Satisfaction</p>
            </div>
            <div class="stat-box">
                <h3 class="stat-number">10+</h3>
                <p class="stat-label">Years in Business</p>
            </div>
        </div>
    </div>
</section>
<Footer></Footer>

        {/* <div className="avoid-section">
          <div className="avoid-left">

          </div>
          <div className="avoid-right">
            <img src={shopify} className="image"></img>

          </div>
        </div> */}
        
      </div>
    </>
  );
}

export default Whyus;
