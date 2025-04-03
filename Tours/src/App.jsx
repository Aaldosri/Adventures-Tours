import "./App.css";
import img from "../src/img/pic.webp";
import img2 from "../src/img/pic3.png";
import img3 from "../src/img/2.png";
import img4 from "../src/img/pic4.jpg";
import img5 from "../src/img/pic5.jpg";
import img6 from "../src/img/pic6.jpg";

import "./App.scss";

import { useState } from "react";

function App() {
  return (
    <>
      <div className="div-body">
        <div style={{ background: "#F1F0E9" }}>
          <section>
            <div class="navigation ">
              <input
                type="checkbox"
                class="navigation__checkbox"
                id="navi-toggle"
              ></input>

              <label for="navi-toggle" class="navigation__button">
                <span class="navigation__icon">&nbsp;</span>
              </label>

              <div class="navigation__background">&nbsp;</div>

              <nav class="navigation__nav">
                <ul class="navigation__list">
                  <li class="navigation__item">
                    <a href="#" class="navigation__link">
                      <span>01</span>Exploer
                    </a>
                  </li>
                  <li class="navigation__item">
                    <a href="#" class="navigation__link">
                      <span>02</span>Features
                    </a>
                  </li>
                  <li class="navigation__item">
                    <a href="#" class="navigation__link">
                      <span>03</span>Popular tours
                    </a>
                  </li>
                  <li class="navigation__item">
                    <a href="#" class="navigation__link">
                      <span>04</span>Review
                    </a>
                  </li>
                  <li class="navigation__item">
                    <a href="#" class="navigation__link">
                      <span>05</span>Book now
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <header
              style={{
                background: "gray",
                height: "90vh",
                clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)", // رفع القص قليلاً
              }}
            >
              <div
                style={{
                  background: "green",
                  backgroundImage: `linear-gradient(rgba(11, 113, 84, 0.62), rgba(56, 81, 58, 0.5)), url(${img6})`,
                  backgroundSize: "cover",

                  backgroundPosition: "center",
                  height: "100vh", // يمكنك تعديلها حسب الحاجة
                }}
                // className="flex justify-between items-center p-4"
              >
                <img
                  style={{ height: "150px", width: "150px" }}
                  src={img3}
                  alt=""
                />
                <div class="wrapper">
                  <a href=""></a>
                  <a href=""></a>
                  <a href=""></a>
                  <a href=""></a>
                  <span class="fill-text" data-text="Advantures Tours">
                    Advantures Tours
                  </span>
                </div>
              </div>
            </header>
          </section>

          <section>
            <main>
              <div>
                {/* <h1 className="h1-inroduce">
                  Explore the Nature and Embrace the Adventure
                </h1> */}

                <div className="div-inroduce">
                  <div class="container2">
                    <h1 className="header">
                      Explore the Nature and Embrace the Adventure
                    </h1>
                    <p
                      style={{
                        margin: "10px",
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                        alignContent: "center",
                        alignItems: "center",
                      }}
                    >
                      Step into nature’s wonders and embrace the thrill of
                      adventure. From soaring peaks to winding rivers, every
                      journey is a new story waiting to unfold!
                    </p>
                    <div class="content2">
                      <div class="wrapper">
                        <div class="box vintage">
                          <img
                            src="https://cdn.pixabay.com/photo/2018/08/29/02/59/pier-3639038_1280.jpg"
                            alt="EMMYLOU"
                          />
                          <h2 className="h2-exploer">Ocean</h2>
                        </div>
                      </div>
                      <div class="wrapper">
                        <div class="box vintage">
                          <img
                            src="https://cdn.pixabay.com/photo/2022/08/15/03/07/path-7387018_1280.jpg
  "
                            alt="Jenny of Oldstones"
                          />
                          <div class="frame">
                            <h2 className="h2-exploer">Jungle</h2>
                          </div>
                        </div>
                      </div>
                      <div class="wrapper">
                        <div class="box vintage">
                          <img
                            src="https://cdn.pixabay.com/photo/2021/02/05/01/22/man-5983064_1280.jpg"
                            alt="BOX"
                          />
                          <h2 className="h2-exploer">Hiking</h2>
                        </div>
                      </div>
                      <div class="wrapper">
                        <div class="box zoom-out">
                          <img
                            src="https://cdn.pixabay.com/photo/2018/05/10/23/04/giglio-3389078_1280.jpg
"
                            alt="Postcards From Italy"
                          />
                        </div>
                      </div>
                      <div class="wrapper">
                        <div class="box zoom-out">
                          <img
                            src="https://images.unsplash.com/photo-1562605270-3cdc52af7f5d?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAzMDA2NjM&ixlib=rb-4.0.3&q=85
"
                            alt="Melody Noir"
                          />
                        </div>
                      </div>
                      <div class="wrapper">
                        <div class="box zoom-out">
                          <img
                            src="https://cdn.pixabay.com/photo/2022/11/20/19/33/northern-norway-7605060_1280.jpg
"
                            alt="Blue Ridge Mountains"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ===== FEATURES ===== */}
              <section className="section-features">
                {/* <div className="h1">
                  <h1
                    style={{
                      background: "orange",
                      marginTop: "150px",
                    }}
                  >
                    {" "}
                    Features
                  </h1>
                </div> */}
                <div class="timeline">
                  <div class="container left">
                    <i class="icon fa fa-home">1</i>
                    <div class="content">
                      <h2 className="div-features">Thrilling Experiences</h2>
                      <p className="div-features">
                        Enjoy adrenaline-pumping activities like hiking,
                        kayaking, and zip-lining in breathtaking locations.{" "}
                      </p>
                    </div>
                  </div>
                  <div class="container right">
                    <i class="icon fa fa-gift">2</i>
                    <div class="content">
                      <h2 className="div-features">Expert-Guided Tours</h2>
                      <p className="div-features">
                        Our professional guides ensure a safe and unforgettable
                        journey, packed with local insights and hidden gems.{" "}
                      </p>
                    </div>
                  </div>
                  <div class="container left">
                    <i class="icon fa fa-user">3</i>
                    <div class="content">
                      <h2 className="div-features">All-Inclusive Packages</h2>
                      <p className="div-features">
                        Hassle-free adventures with transportation, gear, and
                        accommodations included, so you can focus on the
                        experience.{" "}
                      </p>
                    </div>
                  </div>
                </div>{" "}
              </section>

              {/* ===== END FEATURES ===== */}

              {/* ===== CARDS ===== */}
              <div className="h1">
                <h1 className="header2">MOST POPULAR TOURS</h1>
              </div>
              <div className="div-cards">
                <div className="flip-card-container" style={{ "--hue": 220 }}>
                  <div className="flip-card">
                    <div className="card-front">
                      <figure>
                        <div className="img-bg"></div>
                        <img
                          src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                          alt="Brohm Lake"
                        />
                        <figcaption>Jungle Adventure</figcaption>
                      </figure>

                      <ul>
                        <li className="li-size">Duration: 3 Days</li>
                        <li>Explore wildlife in tropical forests</li>
                        <li>Hike through lush greenery</li>
                        <li>Camping under the stars</li>
                        <li>Traditional local meals</li>
                      </ul>
                    </div>

                    <div className="card-back">
                      <figure>
                        <div className="img-bg"></div>
                        <img
                          src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                          alt="Brohm Lake"
                        />
                      </figure>

                      <button>Book</button>

                      <div className="design-container">
                        <h1 className="h1-center">$220</h1>

                        <span className="design design--1"></span>
                        <span className="design design--2"></span>
                        <span className="design design--3"></span>
                        <span className="design design--4"></span>
                        <span className="design design--5"></span>
                        <span className="design design--6"></span>
                        <span className="design design--7"></span>
                        <span className="design design--8"></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flip-card-container" style={{ "--hue": 170 }}>
                  <div className="flip-card">
                    <div className="card-front">
                      <figure>
                        <div className="img-bg"></div>
                        <img
                          src="https://images.unsplash.com/photo-1568454537842-d933259bb258?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="Image 2"
                        />
                        <figcaption>Hiking</figcaption>
                      </figure>

                      <ul>
                        <li className="li-size">Duration: 5 Days</li>
                        <li>Trails for all fitness levels</li>
                        <li>Scenic mountain views</li>
                        <li>Camping and cozy lodges</li>
                        <li>Wildlife spotting opportunities</li>
                      </ul>
                    </div>

                    <div className="card-back">
                      <figure>
                        <div className="img-bg"></div>
                        <img
                          src="https://images.unsplash.com/photo-1568454537842-d933259bb258?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="image-2"
                        />
                      </figure>

                      <button>Book</button>

                      <div className="design-container">
                        <h1 className="h1-center">$350</h1>
                        <span className="design design--1"></span>
                        <span className="design design--2"></span>
                        <span className="design design--3"></span>
                        <span className="design design--4"></span>
                        <span className="design design--5"></span>
                        <span className="design design--6"></span>
                        <span className="design design--7"></span>
                        <span className="design design--8"></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flip-card-container" style={{ "--hue": 350 }}>
                  <div className="flip-card">
                    <div className="card-front">
                      <figure>
                        <div className="img-bg"></div>
                        <img
                          src="https://images.unsplash.com/photo-1517971053567-8bde93bc6a58?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="Brohm Lake"
                        />
                        <figcaption>Ocean Cruise</figcaption>
                      </figure>

                      <ul>
                        <li className="li-size">Duration: 7 Days</li>
                        <li>Explore exotic coastal destinations</li>
                        <li>Snorkeling and water sports</li>
                        <li>Luxury cruise amenities</li>
                        <li>Exclusive excursions to remote islands</li>
                      </ul>
                    </div>

                    <div className="card-back">
                      <figure>
                        <div className="img-bg"></div>
                        <img
                          src="https://images.unsplash.com/photo-1517971053567-8bde93bc6a58?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="Brohm Lake"
                        />
                      </figure>
                      <button>Book</button>

                      <div className="design-container">
                        <h1 className="h1-center">$440</h1>

                        <span className="design design--1"></span>
                        <span className="design design--2"></span>
                        <span className="design design--3"></span>
                        <span className="design design--4"></span>
                        <span className="design design--5"></span>
                        <span className="design design--6"></span>
                        <span className="design design--7"></span>
                        <span className="design design--8"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ===== END CARDS ===== */}

              {/* ===== REVIEW ===== */}

              <div className="div-review">
                <div className="h1">
                  <h1 className="h1-review">We make people genuinely happy</h1>
                </div>
                <div class="outerdiv">
                  <div class="innerdiv">
                    <div class="div1 eachdiv">
                      <div class="userdetails">
                        <div class="imgbox">
                          <img
                            src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.jpg"
                            alt=""
                          />
                        </div>
                        <div class="detbox">
                          <p class="name">Daniel Clifford</p>
                          <p class="designation">Verified Graduate</p>
                        </div>
                      </div>
                      <div class="review">
                        <h4>
                          I received a job offer mid-course, and the subjects I
                          learned were current, if not more so, in the company I
                          joined. I honestly feel I got every penny’s worth.
                        </h4>
                        <p>
                          “ I was an EMT for many years before I joined the
                          bootcamp. I’ve been looking to make a transition and
                          have heard some people who had an amazing experience
                          here. I signed up for the free intro course and found
                          it incredibly fun! I enrolled shortly thereafter.”
                        </p>
                      </div>
                    </div>
                    <div class="div2 eachdiv">
                      <div class="userdetails">
                        <div class="imgbox">
                          <img
                            src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jonathan.jpg"
                            alt=""
                          />
                        </div>
                        <div class="detbox">
                          <p class="name">Jonathan Walters</p>
                          <p class="designation">Verified Graduate</p>
                        </div>
                      </div>
                      <div class="review">
                        <h4>
                          The team was very supportive and kept me motivated
                        </h4>
                        <p>
                          “ I started as a total newbie with virtually no coding
                          skills. I now work as a mobile engineer for a big
                          company.”
                        </p>
                      </div>
                    </div>
                    <div class="div3 eachdiv">
                      <div class="userdetails">
                        <div class="imgbox">
                          <img
                            src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-kira.jpg"
                            alt=""
                          />
                        </div>
                        <div class="detbox">
                          <p class="name dark">Kira Whittle</p>
                          <p class="designation dark">Verified Graduate</p>
                        </div>
                      </div>
                      <div class="review dark">
                        <h4>
                          Such a life-changing experience. Highly recommended!
                        </h4>
                        <p>
                          “ Before joining the bootcamp, I’ve never written a
                          line of code. I needed some structure from
                          professionals who can help me learn programming step
                          by step. I was encouraged to enroll by a former
                          student of theirs who can only say wonderful things
                          about the program. The entire curriculum and staff did
                          not disappoint. They were very hands-on and I never
                          had to wait long for assistance. The agile team
                          project, in particular, was outstanding. It took my
                          learning to the next level in a way that no tutorial
                          could ever have.”
                        </p>
                      </div>
                    </div>
                    <div class="div4 eachdiv">
                      <div class="userdetails">
                        <div class="imgbox">
                          <img
                            src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg"
                            alt=""
                          />
                        </div>
                        <div class="detbox">
                          <p class="name dark">Jeanette Harmon</p>
                          <p class="designation dark">Verified Graduate</p>
                        </div>
                      </div>
                      <div class="review dark">
                        <h4>An overall wonderful and rewarding experience</h4>
                        <p>
                          “ Thank you for the wonderful experience! I now have a
                          job I really enjoy,”
                        </p>
                      </div>
                    </div>
                    <div class="div5 eachdiv">
                      <div class="userdetails">
                        <div class="imgbox">
                          <img
                            src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-patrick.jpg"
                            alt=""
                          />
                        </div>
                        <div class="detbox">
                          <p class="name">Patrick Abrams</p>
                          <p class="designation">Verified Graduate</p>
                        </div>
                      </div>
                      <div class="review">
                        <h4>
                          Awesome teaching support from TAs who did the bootcamp
                          themselves. Getting guidance from them and learning
                          from their experiences was easy.
                        </h4>
                        <p>
                          “ The staff seem genuinely concerned about my progress
                          which I find really refreshing. The program gave me
                          the confidence necessary to be able to go out in the
                          world and present myself as a capable junior
                          developer. The standard is above the rest.”
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ===== END REVIEW ===== */}

              {/* ===== BOOK ===== */}

              <section className="section-book">
                <div className="book-form">
                  <div class="form-container">
                    <h1 style={{ fontSize: "2.5rem" }}>Start Booking Now</h1>

                    <input type="email" placeholder="Full Name" />
                    <input type="password" placeholder="Email address" />
                    <input type="button" value="Join Us" />
                  </div>
                </div>
              </section>
              {/* ===== END BOOK ===== */}
            </main>
          </section>
        </div>

        {/* ===== FOOTER ===== */}

        <section style={{ paddingBottom: "50px" }}>
          <footer className="site-footer">
            <div className="footer-container">
              <div className="footer-columns">
                <div className="footer-column">
                  <h3 className="footer-column-title">
                    <i data-feather="shopping-bag"></i>{" "}
                    <span className="span">Contact Us</span>
                  </h3>
                  <nav className="footer-nav">
                    <ul className="footer-nav-list">
                      <li className="footer-nav-item">
                        <a href="" className="span-color">
                          <span className="span-color">Contact</span>
                        </a>
                      </li>
                      <li className="footer-nav-item">
                        <a href="" className="span-color">
                          <span className="span-color">Us</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="footer-column">
                  <h3 className="footer-column-title">
                    <i data-feather="share-2"></i>{" "}
                    <span className="span">Social Media</span>
                  </h3>
                  <nav className="footer-nav">
                    <ul className="footer-nav-list">
                      <li className="footer-nav-item">
                        <a href="" className="footer-nav-link">
                          <i data-feather="youtube"></i>{" "}
                          <span className="span-color">Youtube</span>
                        </a>
                      </li>
                      <li className="footer-nav-item">
                        <a href="" className="footer-nav-link">
                          <i data-feather="facebook"></i>{" "}
                          <span className="span-color">Facebook</span>
                        </a>
                      </li>
                      <li className="footer-nav-item">
                        <a href="" className="footer-nav-link">
                          <i data-feather="instagram"></i>{" "}
                          <span className="span-color">Instagram</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="footer-column">
                  <h3 className="footer-column-title">
                    <i data-feather="send"></i>{" "}
                    <span className="span">Privacy Policy</span>
                  </h3>
                  <nav className="footer-nav">
                    <ul className="footer-nav-list">
                      <li className="footer-nav-item">
                        <a
                          href="mailto:contact.laboiserie@gmail.com"
                          className="footer-nav-link"
                        >
                          <span className="span-color"> contact@.com</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="footer-copyrights">
                <img src={img3} alt="Logo" />
                <h2>Copy Right @Abdullah 2025</h2>
              </div>
            </div>
          </footer>
        </section>

        {/* ===== END FOOTER ===== */}
      </div>
    </>
  );
}

export default App;
