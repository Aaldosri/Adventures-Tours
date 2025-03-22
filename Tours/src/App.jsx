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
      <div
        // className="w-screen"
        style={{
          padding: "50px",
          maxHeight: "100vh",
          width: "100vw",
        }}
      >
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
                  <span>03</span>Review
                </a>
              </li>
              <li class="navigation__item">
                <a href="#" class="navigation__link">
                  <span>04</span>Popular tours
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

        <div style={{ background: "#F1F0E9" }}>
          <section>
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
                    <h1 class="header">
                      Explore the Nature and Embrace the Adventure
                    </h1>
                    <p
                      style={{
                        margin: "10px",
                        width: "100%",
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
                    <div class="content">
                      <div class="wrapper">
                        <div class="box vintage">
                          <img
                            src="https://images.unsplash.com/photo-1500049242364-5f500807cdd7?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyOTk3ODE&ixlib=rb-4.0.3&q=85"
                            alt="EMMYLOU"
                          />
                          <h2>Norway</h2>
                          <p>The mountain ridge of norway</p>
                        </div>
                      </div>
                      <div class="wrapper">
                        <div class="box w-content">
                          <img
                            src="https://images.unsplash.com/photo-1516739711484-6f80025660c6?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyOTk3ODE&ixlib=rb-4.0.3&q=85
  "
                            alt="Jenny of Oldstones"
                          />
                          <div class="frame">
                            <h2>Australia</h2>
                          </div>
                        </div>
                      </div>
                      <div class="wrapper">
                        <div class="box postcard">
                          <img
                            src="https://images.unsplash.com/photo-1570512431473-7345c8dbfa4c?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAzMDAyMzU&ixlib=rb-4.0.3&q=85"
                            alt="BOX"
                          />
                          <h2>
                            Lake Hanoi <p class="hide">VIETNAM</p>
                          </h2>
                        </div>
                      </div>
                      <div class="wrapper">
                        <div class="box zoom-in">
                          <img
                            src="https://images.unsplash.com/photo-1603161472885-39edf23d7a3e?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAzMDA0MDI&ixlib=rb-4.0.3&q=85
"
                            alt="Postcards From Italy"
                          />
                          <h2>Postcard From Sweden</h2>
                          <p>june 2022-07-21</p>
                        </div>
                      </div>
                      <div class="wrapper">
                        <div class="box blury-card">
                          <img
                            src="https://images.unsplash.com/photo-1632853073412-782bf0279d65?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAzMDA2MTI&ixlib=rb-4.0.3&q=85
"
                            alt="Blue Ridge Mountains"
                          />
                          <div class="frame">
                            <h2>Las Vegas</h2>
                            <p>USA</p>
                          </div>
                        </div>
                      </div>
                      <div class="wrapper">
                        <div class="box zoom-out">
                          <img
                            src="https://images.unsplash.com/photo-1562605270-3cdc52af7f5d?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAzMDA2NjM&ixlib=rb-4.0.3&q=85
"
                            alt="Melody Noir"
                          />
                          <div class="frame">
                            <h2>
                              Nichlas <span>Wijk</span>
                            </h2>
                            <p>CodePen Challange</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ===== FEATURES ===== */}
              <div
                style={{
                  background: "#10ac84",
                  height: "100vh",
                  clipPath: "polygon(0 20%, 100% 0, 100% 80%, 0 100%)", // قص من الأعلى والأسفل
                }}
              >
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
                    <div class="date">15 Dec</div>
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
                    <div class="date">22 Oct</div>
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
                    <div class="date">10 Jul</div>
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
              </div>

              {/* ===== END FEATURES ===== */}

              {/* ===== CARDS ===== */}
              <div className="h1">
                <h1>MOST POPULAR TOURS</h1>
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
                        <li>Detail 1</li>
                        <li>Detail 2</li>
                        <li>Detail 3</li>
                        <li>Detail 4</li>
                        <li>Detail 5</li>
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
                        <li>Detail 1</li>
                        <li>Detail 2</li>
                        <li>Detail 3</li>
                        <li>Detail 4</li>
                        <li>Detail 5</li>
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
                        <h1 className="h1-center">$330</h1>
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
                        <li>Detail 1</li>
                        <li>Detail 2</li>
                        <li>Detail 3</li>
                        <li>Detail 4</li>
                        <li>Detail 5</li>
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
                        <h1 className="h1-center">$390</h1>

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
                  <h1>Review</h1>
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
            </main>
          </section>

          <section>
            <footer class="footer">
              <div class="footer__parralax">
                <div class="footer__parralax-trees"></div>
                <div class="footer__parralax-moto"></div>
                <div class="footer__parralax-secondplan"></div>
                <div class="footer__parralax-premierplan"></div>
                <div class="footer__parralax-voiture"></div>
              </div>
              <div class="container2">
                <div class="footer__columns">
                  <div class="footer__col">
                    <h3 class="footer__col-title">
                      <i data-feather="shopping-bag"></i>{" "}
                      <span>La boutique</span>
                    </h3>
                    <nav class="footer__nav">
                      <ul class="footer__nav-list">
                        <li class="footer__nav-item">
                          <a href="" class="footer__nav-link">
                            Mentions légales
                          </a>
                        </li>
                        <li class="footer__nav-item">
                          <a href="" class="footer__nav-link">
                            Politique de confidentialité
                          </a>
                        </li>
                        <li class="footer__nav-item">
                          <a href="" class="footer__nav-link">
                            CGV
                          </a>
                        </li>
                        <li class="footer__nav-item">
                          <a href="" class="footer__nav-link">
                            Livraisons et retours
                          </a>
                        </li>
                        <li class="footer__nav-item">
                          <a href="" class="footer__nav-link">
                            Règlement concours
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div class="footer__col">
                    <h3 class="footer__col-title">
                      <i data-feather="share-2"></i> <span>Nos réseaux</span>
                    </h3>
                    <nav class="footer__nav">
                      <ul class="footer__nav-list">
                        <li class="footer__nav-item">
                          <a href="" class="footer__nav-link">
                            <i data-feather="youtube"></i>
                            <span>Youtube</span>
                          </a>
                        </li>
                        <li class="footer__nav-item">
                          <a href="" class="footer__nav-link">
                            <i data-feather="facebook"></i>
                            <span>Facebook</span>
                          </a>
                        </li>
                        <li class="footer__nav-item">
                          <a href="" class="footer__nav-link">
                            <i data-feather="instagram"></i>
                            <span>Instagram</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div class="footer__col">
                    <h3 class="footer__col-title">
                      <i data-feather="send"></i> <span>Contact</span>
                    </h3>
                    <nav class="footer__nav">
                      <ul class="footer__nav-list">
                        <li class="footer__nav-item">
                          <a
                            href="mailto:contact.laboiserie@gmail.com"
                            class="footer__nav-link"
                          >
                            contact.laboiserie@gmail.com
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>

                <div class="footer__copyrights">
                  <img
                    style={{ height: "150px", width: "150px" }}
                    src={img3}
                    alt=""
                  />
                  <h2>Copy Right Abdullah 2025</h2>{" "}
                </div>
              </div>
            </footer>{" "}
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
