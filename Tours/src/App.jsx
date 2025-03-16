import "./App.css";
import img from "../src/img/pic.webp";
import img2 from "../src/img/pic3.png";
import img3 from "../src/img/2.png";
import "./App.scss";

import { useState } from "react";

function App() {
  return (
    <>
      <div
        // className="w-screen"
        style={{
          padding: "50px",
          height: "100vh",
          width: "100vw",
        }}
      >
        <div style={{ background: "orange" }}>
          <section>
            <header
              style={{
                background: "gray",
                height: "90vh",
                clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)", // رفع القص قليلاً
              }}
            >
              <div
                style={{ background: "green" }}
                className="flex justify-between items-center p-4"
              >
                <div class="navigation ">
                  <img
                    class="navigation"
                    style={{ height: "150px", width: "150px" }}
                    src={img3}
                    alt=""
                  />

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
                          <span>01</span>About Us
                        </a>
                      </li>
                      <li class="navigation__item">
                        <a href="#" class="navigation__link">
                          <span>02</span>Your benfits
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
              </div>
              <div class="wrapper">
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
                <span class="fill-text" data-text="Advantures Tours">
                  Advantures Tours
                </span>
              </div>
            </header>
          </section>

          <section>
            <main></main>
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
