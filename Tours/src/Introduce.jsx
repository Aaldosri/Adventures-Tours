import React from "react";

export default function Introduce({ exploreRef }) {
  return (
    <section>
      <div>
        <div className="div-inroduce" ref={exploreRef}>
          <div class="container2">
            <h1 className="pt-[10vh] header2 text-[#222] text-center font-bold text-[35px] sm:text-[38px] max-w-[90%] sm:max-w-full mx-auto leading-snug break-words">
              Explore the Nature and Embrace the Adventure
            </h1>
            <p className="m-[10px] text-center flex justify-center items-center p-[10px]">
              Step into nature’s wonders and embrace the thrill of adventure.
              From soaring peaks to winding rivers, every journey is a new story
              waiting to unfold!
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
                    src="https://cdn.pixabay.com/photo/2022/08/15/03/07/path-7387018_1280.jpg"
                    alt="Jenny of Oldstones"
                  />
                  <div class="frame">
                    <h2 class="h2-exploer">Jungle</h2>
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
    </section>
  );
}
