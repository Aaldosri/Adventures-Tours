import React from "react";

export default function Review({ reviewRef }) {
  return (
    <section>
      <div className="div-review relative bg-neutral-900/30" ref={reviewRef}>
        <div className="h1">
          <h1 className="pt-[10vh] header3 text-[32px] sm:text-[36px] md:text-[44px] font-bold text-center leading-tight">
            We Make People Genuinely Happy
          </h1>
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
                  I received a job offer mid-course, and the subjects I learned
                  were current, if not more so, in the company I joined. I
                  honestly feel I got every penny’s worth.
                </h4>
                <p>
                  “ I was an EMT for many years before I joined the bootcamp.
                  I’ve been looking to make a transition and have heard some
                  people who had an amazing experience here. I signed up for the
                  free intro course and found it incredibly fun! I enrolled
                  shortly thereafter.”
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
                <h4>The team was very supportive and kept me motivated</h4>
                <p>
                  “ I started as a total newbie with virtually no coding skills.
                  I now work as a mobile engineer for a big company.”
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
                <h4>Such a life-changing experience. Highly recommended!</h4>
                <p>
                  “ Before joining the bootcamp, I’ve never written a line of
                  code. I needed some structure from professionals who can help
                  me learn programming step by step. I was encouraged to enroll
                  by a former student of theirs who can only say wonderful
                  things about the program. The entire curriculum and staff did
                  not disappoint. They were very hands-on and I never had to
                  wait long for assistance. The agile team project, in
                  particular, was outstanding. It took my learning to the next
                  level in a way that no tutorial could ever have.”
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
                  “ Thank you for the wonderful experience! I now have a job I
                  really enjoy,”
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
                  The organization and support from the team really helped me
                  choose the right adventure. Everything was clear, and the trip
                  itself was full of excitement and challenges.{" "}
                </h4>
                <p>
                  “ The team genuinely cared about my experience and were always
                  available to answer my questions. After this trip, I feel more
                  confident exploring new places. I highly recommend it to
                  anyone looking for real adventure..”
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
          style={{
            backgroundImage:
              "linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)",
            borderColor: "rgba(92, 79, 240, 0.2)",
          }}
        ></div>
        <div
          className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
          style={{
            backgroundImage:
              "linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)",
            borderColor: "rgba(92, 79, 240, 0.2)",
          }}
        ></div>
      </div>
    </section>
  );
}
