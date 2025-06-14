import React from "react";

export default function Header({
  img6,
  img3,
  handleScroll,
  exploreRef,
  featuresRef,
  popularRef,
  reviewRef,
  bookRef,
}) {
  return (
    <div>
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
                <a
                  href="#"
                  class="navigation__link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(exploreRef);
                  }}
                >
                  <span>01</span>Exploer
                </a>
              </li>
              <li class="navigation__item">
                <a
                  href="#"
                  class="navigation__link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(featuresRef);
                  }}
                >
                  <span>02</span>Features
                </a>
              </li>
              <li class="navigation__item">
                <a
                  href="#"
                  class="navigation__link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(popularRef);
                  }}
                >
                  <span>03</span>Popular tours
                </a>
              </li>
              <li class="navigation__item">
                <a
                  href="#"
                  class="navigation__link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(reviewRef);
                  }}
                >
                  <span>04</span>Review
                </a>
              </li>
              <li class="navigation__item">
                <a
                  href="#"
                  class="navigation__link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(bookRef);
                  }}
                >
                  <span>05</span>Book now
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <header
          style={{
            background: "gray",
            height: "100vh",
            clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
          }}
        >
          <div
            style={{
              background: "green",
              backgroundImage: `linear-gradient(rgba(11, 113, 84, 0.62), rgba(56, 81, 58, 0.5)), url(${img6})`,
              backgroundSize: "cover",

              backgroundPosition: "center",
              height: "100vh",
            }}
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
    </div>
  );
}
