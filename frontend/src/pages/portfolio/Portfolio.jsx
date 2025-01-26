import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import school1 from "../../assets/school1.jpg";
import school2 from "../../assets/school2.jpg";
import school3 from "../../assets/school3.jpg";
import hospital1 from "../../assets/hospital1.jpg";
import hospital2 from "../../assets/hospital2.jpg";
import hospital3 from "../../assets/hospital3.jpg";
import gym1 from "../../assets/gym1.jpg";
import gym2 from "../../assets/gym2.jpg";
import gym3 from "../../assets/gym3.jpg";
import commerce1 from "../../assets/commerce1.jpg";
import commerce2 from "../../assets/commerce2.jpg";
import commerce3 from "../../assets/commerce3.jpg";
import salon1 from "../../assets/salon1.jpg";
import salon2 from "../../assets/salon2.jpg";
import salon3 from "../../assets/salon3.jpg";

import "./Portfolio.css";
function Portfolio() {
  return (
    <>
      <div className="portfolio">
        <Navbar></Navbar>
        <div className="portfolio-container">
          <div className="portfolio-heading">
            <h1>Our Work!!</h1>
          </div>
          <div className="portfolio-middle">
            <div className="portfolio-data">
              <h2>"Shaping School Experiences with Purposeful Design."</h2>
              <p>
                At GoMedia, we specialize in creating impactful designs tailored
                to the unique needs of schools and educational institutions.
              </p>
            </div>
            <div className="portfolio-card-container">
              <div class="portfolio-card">
                <img
                  src={school1}
                  alt="Interactive Classroom Design"
                  class="portfolio-card-image"
                />
                <div class="portfolio-card-content">
                  <h3 class="portfolio-card-title">
                    Interactive Classroom Design
                  </h3>
                  <p class="portfolio-card-description">
                    A vibrant, interactive classroom mural designed to engage
                    students and foster a love for learning.
                  </p>
                </div>
              </div>
              <div class="portfolio-card">
                <img
                  src={school2}
                  alt="School Branding Redesign"
                  class="portfolio-card-image"
                />
                <div class="portfolio-card-content">
                  <h3 class="portfolio-card-title">School Branding Redesign</h3>
                  <p class="portfolio-card-description">
                    Revamped the branding for a local school, including logos,
                    signage, and marketing materials.
                  </p>
                </div>
              </div>

              <div class="portfolio-card">
                <img
                  src={school3}
                  alt="STEM Lab Graphics"
                  class="portfolio-card-image"
                />
                <div class="portfolio-card-content">
                  <h3 class="portfolio-card-title">STEM Lab Graphics</h3>
                  <p class="portfolio-card-description">
                    Created custom graphics for a STEM lab to inspire creativity
                    and innovation among students.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* hospital */}
          <div className="portfolio-middle">
            <div className="portfolio-data">
              <h2>"Designing Care with Compassion and Precision."</h2>
              <p>
                At GoMedia, we create thoughtful design solutions for hospitals
                and healthcare facilities that prioritize comfort, clarity, and
                trust.
              </p>
            </div>
            <div className="portfolio-card-container">
              <div class="portfolio-card">
                <img
                  src={hospital1}
                  alt="Interactive Classroom Design"
                  class="portfolio-card-image"
                />
                <div class="portfolio-card-content">
                  <h3 class="portfolio-card-title">Healing Touch Hospital</h3>
                  <p class="portfolio-card-description">
                    Developed a serene and professional brand identity for
                    Healing Touch Hospital, including a calming logo, wayfinding
                    signage, and patient information materials.
                  </p>
                </div>
              </div>
              <div class="portfolio-card">
                <img
                  src={hospital2}
                  alt="School Branding Redesign"
                  class="portfolio-card-image"
                />
                <div class="portfolio-card-content">
                  <h3 class="portfolio-card-title">
                    {" "}
                    BrightPath Children’s Clinic
                  </h3>
                  <p class="portfolio-card-description">
                    Designed a cheerful and child-friendly interior for
                    BrightPath Children’s Clinic. The project included playful
                    wall art, custom graphics, and educational posters that
                    eased anxiety for young patients and their families.
                  </p>
                </div>
              </div>

              <div class="portfolio-card">
                <img
                  src={hospital3}
                  alt="STEM Lab Graphics"
                  class="portfolio-card-image"
                />
                <div class="portfolio-card-content">
                  <h3 class="portfolio-card-title">
                    VitalCare Diagnostic Center
                  </h3>
                  <p class="portfolio-card-description">
                    Created a clean and modern visual identity for VitalCare
                    Diagnostic Center. This included streamlined signage,
                    marketing materials, and a professional website, ensuring
                    ease of navigation .
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* gym */}
          <div className="portfolio-middle">
            <div className="portfolio-data">
              <h2>"Elevating Fitness Spaces with Dynamic Design."</h2>
              <p>
                At GoMedia, we specialize in designing powerful visual
                identities and branding solutions for gyms and fitness centers.
                From bold logos to inspiring wall graphics and digital assets,
                we create environments that energize members and reinforce a
                commitment to health and fitness.
              </p>
            </div>
            <div className="portfolio-card-container">
              <div class="portfolio-card">
                <img
                  src={gym1}
                  alt="Interactive Classroom Design"
                  class="portfolio-card-image"
                />
                <div class="portfolio-card-content">
                  <h3 class="portfolio-card-title">Iron Core Gym</h3>
                  <p class="portfolio-card-description">
                    Developed a high-energy branding package for Iron Core Gym,
                    including a fierce logo, motivational wall murals, and
                    merchandise designs.
                  </p>
                </div>
              </div>
              <div class="portfolio-card">
                <img
                  src={gym2}
                  alt="School Branding Redesign"
                  class="portfolio-card-image"
                />
                <div class="portfolio-card-content">
                  <h3 class="portfolio-card-title">FitZone Studio</h3>
                  <p class="portfolio-card-description">
                    Designed a clean and modern branding concept for FitZone
                    Studio, featuring sleek signage, class schedules, and
                    promotional materials.
                  </p>
                </div>
              </div>

              <div class="portfolio-card">
                <img
                  src={gym3}
                  alt="STEM Lab Graphics"
                  class="portfolio-card-image"
                />
                <div class="portfolio-card-content">
                  <h3 class="portfolio-card-title">
                    PowerPulse Training Center
                  </h3>
                  <p class="portfolio-card-description">
                    Delivered a bold interior design and branding solution for
                    PowerPulse Training Center.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* e-commerce */}
          <div className="portfolio-middle">
            <div className="portfolio-data">
              <h2>"Building Seamless Shopping Experiences Online."</h2>
              <p>
                At GoMedia, we craft visually compelling and user-friendly
                e-commerce platforms designed to elevate brands and drive sales.
                From sleek UI/UX designs to custom branding and marketing
                assets, we create tailored solutions that transform online
                stores into engaging shopping destinations.
              </p>
            </div>
            <div className="portfolio-card-container">
              <div class="portfolio-card">
                <img
                  src={commerce1}
                  alt="Interactive Classroom Design"
                  class="portfolio-card-image"
                />
                <div class="portfolio-card-content">
                  <h3 class="portfolio-card-title">Trendy Threads Boutique</h3>
                  <p class="portfolio-card-description">
                    Developed a chic and responsive e-commerce website for
                    Trendy Threads Boutique. The project included custom product
                    pages, intuitive navigation, and integrated payment
                    solutions, ensuring a seamless shopping experience for
                    customers.
                  </p>
                </div>
              </div>
              <div class="portfolio-card">
                <img
                  src={commerce2}
                  alt="School Branding Redesign"
                  class="portfolio-card-image"
                />
                <div class="portfolio-card-content">
                  <h3 class="portfolio-card-title"> Gourmet Goods Market</h3>
                  <p class="portfolio-card-description">
                    Designed an online platform for Gourmet Goods Market,
                    featuring vibrant product imagery, smart categorization, and
                    personalized recommendations.
                  </p>
                </div>
              </div>

              <div class="portfolio-card">
                <img
                  src={commerce3}
                  alt="STEM Lab Graphics"
                  class="portfolio-card-image"
                />
                <div class="portfolio-card-content">
                  <h3 class="portfolio-card-title">Tech Haven</h3>
                  <p class="portfolio-card-description">
                    Created a dynamic and modern e-commerce site for Tech Haven,
                    incorporating advanced search filters, 360-degree product
                    views, and streamlined checkout processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* salon */}
          <div className="portfolio-middle">
            <div className="portfolio-data">
              <h2>"Crafting Style, One Salon at a Time."</h2>
              <p>
                At GoMedia, we bring a touch of elegance to salon branding and
                design. From eye-catching logos to sleek interior graphics and
                promotional materials, we specialize in creating visuals that
                reflect the unique personality of each salon
              </p>
            </div>
            <div className="portfolio-card-container">
              <div class="portfolio-card">
                <img
                  src={salon1}
                  alt="Interactive Classroom Design"
                  class="portfolio-card-image"
                />
                <div class="portfolio-card-content">
                  <h3 class="portfolio-card-title">Luxe Beauty Lounge</h3>
                  <p class="portfolio-card-description">
                    Designed a sophisticated brand identity for Luxe Beauty
                    Lounge, including a modern logo, custom signage, and
                    marketing materials.
                  </p>
                </div>
              </div>
              <div class="portfolio-card">
                <img
                  src={salon2}
                  alt="School Branding Redesign"
                  class="portfolio-card-image"
                />
                <div class="portfolio-card-content">
                  <h3 class="portfolio-card-title">Blossom Nail & Spa</h3>
                  <p class="portfolio-card-description">
                    Created a vibrant and refreshing design concept for Blossom
                    Nail & Spa.
                  </p>
                </div>
              </div>

              <div class="portfolio-card">
                <img
                  src={salon3}
                  alt="STEM Lab Graphics"
                  class="portfolio-card-image"
                />
                <div class="portfolio-card-content">
                  <h3 class="portfolio-card-title">The Urban Cut Studio</h3>
                  <p class="portfolio-card-description">
                    Delivered a bold and contemporary branding solution for The
                    Urban Cut Studio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Portfolio;
