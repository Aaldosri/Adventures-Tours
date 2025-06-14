import React from "react";

export default function Card({ popularRef }) {
  const tours = [
    {
      title: "Jungle Adventure",
      duration: "3 Days",
      details: [
        "Explore wildlife in tropical forests",
        "Hike through lush greenery",
        "Camping under the stars",
        "Traditional local meals",
      ],
      price: 220,
      img: "https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      hue: 220,
      alt: "Brohm Lake",
    },
    {
      title: "Hiking",
      duration: "5 Days",
      details: [
        "Trails for all fitness levels",
        "Scenic mountain views",
        "Camping and cozy lodges",
        "Wildlife spotting opportunities",
      ],
      price: 350,
      img: "https://images.unsplash.com/photo-1568454537842-d933259bb258?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      hue: 170,
      alt: "Image 2",
    },
    {
      title: "Ocean Cruise",
      duration: "7 Days",
      details: [
        "Explore exotic coastal destinations",
        "Snorkeling and water sports",
        "Luxury cruise amenities",
        "Exclusive excursions to remote islands",
      ],
      price: 440,
      img: "https://images.unsplash.com/photo-1517971053567-8bde93bc6a58?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3",
      hue: 350,
      alt: "Brohm Lake",
    },
  ];

  return (
    <>
      <div
        className="h1 scroll-mt-[100px]"
        ref={popularRef}
        style={{ marginTop: "10vh" }}
      >
        <h1 className="header2 font-bold">Most Popular Tours</h1>
      </div>

      <div className="div-cards">
        {tours.map((tour, i) => (
          <div
            key={i}
            className="flip-card-container"
            style={{ "--hue": tour.hue }}
          >
            <div className="flip-card">
              <div className="card-front">
                <figure>
                  <div className="img-bg"></div>
                  <img src={tour.img} alt={tour.alt} />
                  <figcaption>{tour.title}</figcaption>
                </figure>

                <ul>
                  <li className="li-size">Duration: {tour.duration}</li>
                  {tour.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>

              <div className="card-back">
                <figure>
                  <div className="img-bg"></div>
                  <img src={tour.img} alt={tour.alt} />
                </figure>

                <button>Book</button>

                <div className="design-container">
                  <h1 className="h1-center">${tour.price}</h1>

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
        ))}
      </div>
    </>
  );
}
