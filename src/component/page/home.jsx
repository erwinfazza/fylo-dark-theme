import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Hero from "../../assets/images/illustration-intro.png";
import Access from "../../assets/images/icon-access-anywhere.svg";
import Secure from "../../assets/images/icon-security.svg";
import Colab from "../../assets/images/icon-collaboration.svg";
import Folder from "../../assets/images/icon-any-file.svg";
import HeroSection from "../../assets/images/illustration-stay-productive.png";
import Quote from "../../assets/images/bg-quotes.png";
import Satish from "../../assets/images/profile-1.jpg";
import Bruce from "../../assets/images/profile-2.jpg";
import Iva from "../../assets/images/profile-3.jpg";
import Mail from "../../assets/images/icon-email.svg";
import Phone from "../../assets/images/icon-phone.svg";
import Logo from "../../assets/images/logo.svg";
import Location from "../../assets/images/icon-location.svg";

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md="12">
            <div className="images text-center mt-5 pt-5">
              <img src={Hero} alt="hero" className="hero" />
            </div>
          </Col>
          <Col md="6" className="offset-md-3">
            {" "}
            <div className="text-center">
              <h2>
                All your files in one secure location, accessible anywhere.
              </h2>
              <p className="fylo">
                Fylo store all your most important files in one location. acces
                you need, share and collaborate with family, and co workers.
              </p>
              <div className="my-3">
                <a href="#" className="top-btn mt-2">
                  Get Started
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* main conten  */}
      <Container className="my-5 py-5">
        <Row>
          <Col md="4" className="offset-md-1 text-center">
            <div className="py-3">
              <img src={Access} alt="acces" />
            </div>
            <strong>Access your files, anywhere</strong>
            <p>
              Tha ability to use smartphone, tablet, or computer to access your
              account means your files follow you evreywhere.
            </p>
          </Col>
          <Col md="4" className="text-center offset-md-2">
            <div className="py-3">
              <img src={Secure} alt="secure" />
            </div>
            <strong>Security you can trust</strong>
            <p>
              2-factor authentication and user-controlled encrypt just a couple
              of the security features we allow to secure your files.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md="4" className="offset-md-1 text-center">
            <div className="py-3">
              <img src={Colab} alt="collab" />
            </div>
            <strong>Real-time collaboration</strong>
            <p>
              Securely share file and folders with friends and colleagues for
              live collaboration. No email attachments required.
            </p>
          </Col>
          <Col md="4" className="text-center offset-md-2">
            <div className="py-3">
              <img src={Folder} alt="folder" />
            </div>
            <strong>Store any type of file</strong>
            <p>
              Whether you're sharing holidays photos or work documnts, Fylo has
              you covered allowing for all file types to be securely stored and
              shared.
            </p>
          </Col>
        </Row>
      </Container>
      {/* main content end */}

      {/* section-1  */}
      <Container>
        <Row>
          <Col md="5">
            <img src={HeroSection} alt="hero section" className="herosection" />
          </Col>
          <Col md="5" className=" offse-md-2 mt-md-5 pt-md-5 mx-md-5 px-md-5">
            <h2 className="pt-md-3">Stay productive, wherever you are</h2>
            <p>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your storage need.
            </p>
            <p>
              securely share files and folders with friends, family, and
              collagues for live collaboration. No email attachments required.
            </p>
            <a href="#" className="arrow">
              <span>See how Fylo works</span>

              <i className="fa fa-arrow-right mx-2"></i>
            </a>
          </Col>
        </Row>
      </Container>
      {/* section- end */}

      {/* comment section */}
      <section>
        <div className="quote">
          <img src={Quote} alt="quote" />
        </div>
        <div className="container">
          <div className="komen">
            <div className="row">
              <div className="col-md-4">
                <div className="com-1">
                  <p>
                    Fylo has improve our team productivity by an order of
                    magnitude. Since making the switch our team has become a
                    well-oiled collaboration machine.
                  </p>
                  <div className="avatar-1">
                    <div className="avt-1">
                      <img src={Satish} alt="satish" />
                    </div>
                    <div className="name">
                      <strong>Satish Patel</strong>
                      <p>Founder & CEO, Huddle</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4  py-sm-3">
                <div className="com-2 my-sm-3 pt-3">
                  <p>
                    {" "}
                    Fylo has improve our team productivity by an order of
                    magnitude. Since making the switch our team has become a
                    well-oiled collaboration machine.
                  </p>
                  <div className="avatar-2">
                    <div className="avt-2">
                      <img src={Bruce} alt="bruce" />
                    </div>
                    <div className="name">
                      <strong>Bruce McKenzie</strong>
                      <p>Founder & CEO, Huddle</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="com-3">
                  <p>
                    {" "}
                    Fylo has improve our team productivity by an order of
                    magnitude. Since making the switch our team has become a
                    well-oiled collaboration machine.
                  </p>
                  <div className="avatar-3">
                    <div className="avt-3">
                      <img src={Iva} alt="Iva" />
                    </div>
                    <div className="name">
                      <strong>Iva Boyd</strong>
                      <p>Founder & CEO, Huddle</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* comment section end */}

      {/* last content */}
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="sign text-center">
              <h3>Get early access today</h3>
              <p>
                It only takes a minutes to sign up and our free starter tier is
                extremely generous. If you have any question, our support team
                would be happy to help you.
              </p>
              <div>
                <input
                  className="email"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email@example.com"
                  required
                />
                <input
                  className="tombol"
                  type="button"
                  value="Get Started For Free"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* last content end */}

      {/* footer */}
      <footer>
        <Container>
          <Row>
            <Col md="4 " className="py-4">
              <img src={Logo} stroke="white" className="foot-logo" alt="logo" />
              <div className="location mt-3">
                <div>
                  <img src={Location} alt="location" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  aperiam voluptatem, maxime expedita voluptatibus alias?
                </p>
              </div>
            </Col>
            <Col md="2" className=" py-5 mt-4">
              <p>
                <img src={Phone} alt="" />
                <span className="mx-3">+1-543-123-4567</span>
              </p>
              <p>
                <img src={Mail} alt="email" />
                <span className="mx-3">example@fylo.com</span>{" "}
              </p>
            </Col>
            <Col md="2" className="py-5 mt-4">
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </Col>
            <Col md="2" className="py-5 mt-4">
              <ul>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Term</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
              </ul>
            </Col>
            <Col md="2" className="py-5 mt-4">
              <div className="social">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* footer end  */}
    </>
  );
};

export default Home;
