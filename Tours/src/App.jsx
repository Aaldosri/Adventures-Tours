import "./App.css";
import img from "../src/img/pic.webp";

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
        <section
          style={{
            height: "94vh",
            background: "orange",
          }}
        >
          <header style={{ background: "red", height: "15vh" }}>
            <div>
              <img
                style={{ height: "100px", width: "100px" }}
                src={img}
                alt=""
              />
              <button class="w-12 h-12 bg-blue-500 rounded-full flex flex-col justify-center items-center relative group">
                <span class="w-6 h-1 bg-black mb-1"></span>
                <span class="w-6 h-1 bg-black mb-1"></span>
                <span class="w-6 h-1 bg-black"></span>
              </button>
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
    </>
  );
}

export default App;
