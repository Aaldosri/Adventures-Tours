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
                  <span>03</span>Popular tours
                </a>
              </li>
              <li class="navigation__item">
                <a href="#" class="navigation__link">
                  <span>04</span>Stories
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
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                  <h1> Features</h1>
                </div>
                <div class="timeline">
                  <div class="container left">
                    <div class="date">15 Dec</div>
                    <i class="icon fa fa-home">1</i>
                    <div class="content">
                      <h2>Lorem ipsum dolor sit amet</h2>
                      <p>
                        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id
                        luctus erat sagittis non. Ut blandit semper pretium.
                      </p>
                    </div>
                  </div>
                  <div class="container right">
                    <div class="date">22 Oct</div>
                    <i class="icon fa fa-gift">2</i>
                    <div class="content">
                      <h2>Lorem ipsum dolor sit amet</h2>
                      <p>
                        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id
                        luctus erat sagittis non. Ut blandit semper pretium.
                      </p>
                    </div>
                  </div>
                  <div class="container left">
                    <div class="date">10 Jul</div>
                    <i class="icon fa fa-user"></i>
                    <div class="content">
                      <h2>Lorem ipsum dolor sit amet</h2>
                      <p>
                        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id
                        luctus erat sagittis non. Ut blandit semper pretium.
                      </p>
                    </div>
                  </div>
                  <div class="container right">
                    <div class="date">18 May</div>
                    <i class="icon fa fa-running"></i>
                    <div class="content">
                      <h2>Lorem ipsum dolor sit amet</h2>
                      <p>
                        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id
                        luctus erat sagittis non. Ut blandit semper pretium.
                      </p>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </main>
          </section>

          <section>
            <footer></footer>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
