import React from "react";

export default function Footer({ img3 }) {
  return (
    <section>
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
                  <li className="footer-nav-item">
                    <a
                      href="mailto:contact.laboiserie@gmail.com"
                      className="footer-nav-link"
                    ></a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="footer-copyrights">
            <img src={img3} alt="Logo" />
            <h2>Abdullah | 2025</h2>
          </div>
        </div>
      </footer>
    </section>
  );
}
