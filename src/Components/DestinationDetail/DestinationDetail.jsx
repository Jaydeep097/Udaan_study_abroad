import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./DestinationDetail.css";

const destinationData = {
  "new-zealand": {
    name: "New Zealand",
    banner: "/src/assets/newzeeland.jpg",
    content: [
      {
        title: "Why Study in New Zealand?",
        text: "New Zealand offers a world-class education system with internationally recognized qualifications. The country is known for its innovative teaching methods, cutting-edge research facilities, and a strong focus on student well-being.",
      },
      {
        title: "Quality of Education",
        text: "All eight of New Zealand's universities are ranked within the top 3% globally. The education system is based on the British model and focuses on research-based teaching, encouraging students to be creative, innovative, and think independently.",
      },
      {
        title: "Stunning Environment",
        text: "Study surrounded by breathtaking landscapes, from snow-capped mountains to pristine beaches. New Zealand offers an excellent work-life balance with numerous outdoor activities to explore during your study breaks.",
      },
      {
        title: "Welcoming Culture",
        text: "New Zealanders, or 'Kiwis', are renowned for their friendliness and hospitality. The country has a diverse multicultural society that warmly welcomes international students from all backgrounds.",
      },
      {
        title: "Work Opportunities",
        text: "International students can work up to 20 hours per week during term and full-time during scheduled breaks. After completing your studies, you may be eligible for a post-study work visa for up to 3 years, offering valuable international work experience.",
      },
      {
        title: "Safe and Stable",
        text: "New Zealand is consistently ranked as one of the most peaceful and least corrupt countries in the world, making it an ideal destination for international students seeking a safe study environment.",
      },
    ],
  },
  usa: {
    name: "USA",
    banner: "/src/assets/usa.jpg",
    content: [
      {
        title: "Why Study in the USA?",
        text: "The United States hosts the largest number of international students in the world, offering unparalleled academic excellence, diverse program options, and cutting-edge research opportunities.",
      },
      {
        title: "World-Class Universities",
        text: "Home to many of the world's top-ranked universities, the US higher education system is known for its quality and flexibility. With over 4,000 accredited institutions, students can find programs that perfectly match their academic and career goals.",
      },
      {
        title: "Innovation and Research",
        text: "US universities are at the forefront of innovation and research, with state-of-the-art facilities and substantial funding. This environment provides students with opportunities to engage in groundbreaking research and work alongside leading experts in their fields.",
      },
      {
        title: "Cultural Diversity",
        text: "The USA offers an incredibly diverse cultural experience. Each region has its own distinct character, from the bustling cities of the East Coast to the tech hubs of California and the friendly Midwest communities.",
      },
      {
        title: "Career Opportunities",
        text: "A US degree is highly valued by employers worldwide. Students can gain practical experience through Optional Practical Training (OPT), allowing them to work in their field of study for up to 3 years after graduation.",
      },
      {
        title: "Campus Life",
        text: "American universities are known for their vibrant campus life, with hundreds of student organizations, state-of-the-art athletic facilities, and cultural events that create a rich college experience beyond the classroom.",
      },
    ],
  },
  uk: {
    name: "UK",
    banner: "/src/assets/uk.jpg",
    content: [
      {
        title: "Why Study in the UK?",
        text: "The United Kingdom offers a world-renowned education system with a rich academic heritage dating back centuries, combined with modern, innovative teaching approaches.",
      },
      {
        title: "Academic Excellence",
        text: "UK institutions consistently rank among the best in the world. A UK degree is recognized globally as a mark of quality, providing graduates with a competitive edge in the global job market.",
      },
      {
        title: "Shorter Duration Programs",
        text: "Undergraduate programs typically take three years to complete (four in Scotland), while most master's programs are just one year. This means you can enter the workforce faster and with less overall tuition costs.",
      },
      {
        title: "Cultural Experience",
        text: "The UK is a multicultural hub where students can experience diverse cultures, historic landmarks, and vibrant cities. From London's cosmopolitan atmosphere to Edinburgh's medieval charm, there's something for everyone.",
      },
      {
        title: "Research Opportunities",
        text: "The UK is a global leader in research and innovation. Students have access to world-class facilities and the opportunity to contribute to groundbreaking research across disciplines.",
      },
      {
        title: "Post-Study Work Options",
        text: "The Graduate Route visa allows international students to stay and work in the UK for 2 years after graduation (3 years for PhD graduates), providing valuable international work experience.",
      },
    ],
  },
  ireland: {
    name: "Ireland",
    banner: "/src/assets/land.jpg",
    content: [
      {
        title: "Why Study in Ireland?",
        text: "Ireland combines high-quality education with a friendly, safe environment and is known for its welcoming atmosphere toward international students.",
      },
      {
        title: "Excellence in Education",
        text: "Irish universities and colleges are ranked among the top 3% globally. The country has a long-standing tradition of academic excellence, with a strong focus on quality and student success.",
      },
      {
        title: "English-Speaking Country",
        text: "As an English-speaking country, Ireland offers international students the chance to study in English while experiencing European culture, making it an ideal destination for improving language skills.",
      },
      {
        title: "Innovation Hub",
        text: "Ireland is a global hub for high-tech industries, with many leading international companies establishing their European headquarters there. This creates excellent internship and employment opportunities for students.",
      },
      {
        title: "Rich Cultural Heritage",
        text: "From stunning landscapes to vibrant cities, Ireland offers a unique cultural experience. The country is famous for its friendly locals, literary tradition, music, and festivals.",
      },
      {
        title: "Post-Study Work Opportunities",
        text: "International graduates can avail of the Third Level Graduate Scheme, which allows them to remain in Ireland for up to 24 months after graduation to seek employment and apply for a work permit.",
      },
    ],
  },
  australia: {
    name: "Australia",
    banner: "/src/assets/austrailia.jpg",
    content: [
      {
        title: "Why Study in Australia?",
        text: "Australia offers a world-class education system combined with an exceptional quality of life, innovative research opportunities, and a diverse, welcoming society.",
      },
      {
        title: "Quality Education",
        text: "All Australian universities are government regulated, ensuring high standards. The country is home to 43 universities with over 22,000 courses across 1,100 institutions.",
      },
      {
        title: "Research and Innovation",
        text: "Australia is at the forefront of new technologies and innovations. Students have access to cutting-edge research facilities and can participate in pioneering research projects across various disciplines.",
      },
      {
        title: "Work While Studying",
        text: "International students can work up to 48 hours per fortnight during term and unlimited hours during scheduled breaks, helping them gain valuable work experience and supplement their income.",
      },
      {
        title: "Stunning Environment",
        text: "From beautiful beaches to vibrant cities and unique wildlife, Australia offers an unparalleled lifestyle. Students can enjoy outdoor activities year-round in one of the world's most livable countries.",
      },
      {
        title: "Post-Study Work Options",
        text: "Graduates can apply for a Post-Study Work visa allowing them to stay and work in Australia for 2-4 years depending on their qualification level, providing a pathway to gain valuable international work experience.",
      },
    ],
  },
  canada: {
    name: "Canada",
    banner: "/src/assets/canada.jpg",
    content: [
      {
        title: "Why Study in Canada?",
        text: "Canada is consistently ranked among the best countries to live in and offers a safe, multicultural environment with affordable, high-quality education and excellent post-graduation opportunities.",
      },
      {
        title: "Academic Excellence",
        text: "Canadian universities and colleges are known for their high standards and consistently rank among the best in the world. A Canadian degree is globally recognized and valued by employers worldwide.",
      },
      {
        title: "Affordable Education",
        text: "Compared to other English-speaking countries, tuition fees in Canada are generally lower. The country also offers numerous scholarships and financial aid options for international students.",
      },
      {
        title: "Diverse and Inclusive Society",
        text: "Canada is known for its multicultural environment and welcoming attitude toward international students. The country values diversity and promotes inclusivity in all aspects of society.",
      },
      {
        title: "Work Opportunities",
        text: "International students can work up to 20 hours per week during academic sessions and full-time during scheduled breaks. This allows them to gain valuable work experience and support their studies.",
      },
      {
        title: "Immigration Pathways",
        text: "Canada offers excellent post-graduation work opportunities through the Post-Graduation Work Permit Program (PGWPP), which allows students to work in Canada for up to 3 years after graduation, potentially leading to permanent residency.",
      },
    ],
  },
};

const DestinationDetail = () => {
  const { id } = useParams();
  const destination = destinationData[id];
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: `I'm interested in studying in ${
      destination?.name || "this country"
    }. Please send me more information.`,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRequestInfo = () => {
    setShowRequestForm(true);
  };

  const handleCloseForm = () => {
    setShowRequestForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert(
      `Thank you for your interest in studying in ${destination.name}! We'll contact you shortly with more information.`
    );
    setShowRequestForm(false);
    // Reset form (optional)
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: `I'm interested in studying in ${destination.name}. Please send me more information.`,
    });
  };

  if (!destination) {
    return (
      <div className="destination-not-found">
        <h2>Destination not found</h2>
        <Link to="/" className="btn dark-btn">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="destination-detail">
      <div
        className="destination-banner"
        style={{ backgroundImage: `url(${destination.banner})` }}
      >
        <div className="banner-overlay">
          <h1>Study in {destination.name}</h1>
        </div>
      </div>

      <div className="destination-content">
        {destination.content.map((section, index) => (
          <div key={index} className="content-section">
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </div>
        ))

        <div className="action-buttons">
          <Link to="/" className="btn outline-btn">
            Back to Destinations
          </Link>
          <button className="btn dark-btn" onClick={handleRequestInfo}>
            Request Information
          </button>
        </div>
      </div>

      {/* Request Information Modal */}
      {showRequestForm && (
        <div className="request-modal-overlay">
          <div className="request-modal">
            <button className="close-btn" onClick={handleCloseForm}>
              ×
            </button>
            <h2>Request Information about {destination.name}</h2>
            <p>
              Fill out this form and our counselors will contact you with
              details about studying in {destination.name}.
            </p>

            <form onSubmit={handleSubmit} className="request-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn dark-btn submit-btn">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DestinationDetail;
