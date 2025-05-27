import React from "react";
import "./Campus.css";
import { useNavigate } from "react-router-dom";
import gallery_1 from "../../assets/newzeeland.jpg";
import gallery_2 from "../../assets/usa.jpg";
import gallery_3 from "../../assets/uk.jpg";
import gallery_4 from "../../assets/land.jpg";
import gallery_5 from "../../assets/austrailia.jpg";
import gallery_6 from "../../assets/canada.jpg";

import white_arrow from "../../assets/white-arrow.png";

const Campus = () => {
  const navigate = useNavigate();

  // Array of destination data
  const destinations = [
    {
      image: gallery_1,
      name: "New Zealand",
      description: "World-class education with stunning landscapes",
      slug: "new-zealand",
    },
    {
      image: gallery_2,
      name: "USA",
      description: "Home to top-ranked universities and diverse opportunities",
      slug: "usa",
    },
    {
      image: gallery_3,
      name: "UK",
      description: "Prestigious institutions with rich academic heritage",
      slug: "uk",
    },
    {
      image: gallery_4,
      name: "Ireland",
      description: "Quality education in a friendly, safe environment",
      slug: "ireland",
    },
    {
      image: gallery_5,
      name: "Australia",
      description: "Innovative education with amazing quality of life",
      slug: "australia",
    },
    {
      image: gallery_6,
      name: "Canada",
      description: "Excellent education system with post-study work options",
      slug: "canada",
    },
  ];

  const handleDestinationClick = (slug) => {
    navigate(`/destination/${slug}`);
  };

  return (
    <div className="campus" id="campus">
      <div className="gallery">
        {destinations.map((dest, index) => (
          <div
            className="gallery-item"
            key={index}
            onClick={() => handleDestinationClick(dest.slug)}
          >
            <img src={dest.image} alt={dest.name} />
            <div className="country-label">{dest.name}</div>
            <div className="overlay">
              <h3>{dest.name}</h3>
              <p>{dest.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="btn dark-btn">
        Explore All Destinations
        <img src={white_arrow} alt="" />
      </button>
    </div>
  );
};

export default Campus;
