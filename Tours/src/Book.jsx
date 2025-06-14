import React from "react";

export default function Book({ bookRef }) {
  return (
    <>
      <section className="section-book" ref={bookRef}>
        <div className="book-form">
          <div class="form-container">
            <h1 style={{ fontSize: "2.5rem", marginBottom: "7vh" }}>
              Start Booking Now
            </h1>

            <input type="email" placeholder="Full Name" />
            <input type="password" placeholder="Email address" />
            <input type="button" value="Join Us" />
          </div>
        </div>
      </section>
    </>
  );
}
