import "./App.css";
import img3 from "../src/img/2.png";
import img6 from "../src/img/pic6.jpg";

import { useRef } from "react";

import "./App.scss";
import Header from "./Header";
import Introduce from "./Introduce";
import Card from "./Card";
import Features from "./Features";
import Review from "./Review";
import Book from "./Book";
import Footer from "./Footer";

function App() {
  const exploreRef = useRef(null);
  const featuresRef = useRef(null);
  const popularRef = useRef(null);
  const reviewRef = useRef(null);
  const bookRef = useRef(null);

  const handleScroll = (ref) => {
    const checkbox = document.getElementById("navi-toggle");
    if (checkbox) checkbox.checked = false;

    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }, 500);
  };

  return (
    <>
      <div className="div-body">
        <div style={{ background: "#F1F0E9" }}>
          <Header
            img6={img6}
            img3={img3}
            handleScroll={handleScroll}
            exploreRef={exploreRef}
            featuresRef={featuresRef}
            popularRef={popularRef}
            reviewRef={reviewRef}
            bookRef={bookRef}
          />

          <section>
            <main>
              <Introduce exploreRef={exploreRef} />

              <Features featuresRef={featuresRef} />

              <Card popularRef={popularRef} />

              <Review reviewRef={reviewRef} />

              <Book bookRef={bookRef} />
            </main>
          </section>
        </div>

        <Footer img3={img3} />
      </div>
    </>
  );
}

export default App;
