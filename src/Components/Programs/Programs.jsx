import React from "react";
import "./Programs.css";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";

const Programs = () => {
  return (
    <>
      <div className="programs" id="programs">
        <div className="program">
          <img src={program_1} alt="Tech Innovation" />
          <div className="program-content">
            <h3>Career counseling </h3>
            <p>
              Helps students explore different career paths and identify suitable fields of study abroad. Application and Admission Process: Assists with university applications, including required documents and deadlines.
            </p>
            
          </div>
        </div>
        <div className="program">
          <img src={program_2} alt="Leadership Development" />
          <div className="program-content">
            <h3>Entrance Exam Preparation</h3>
            <p>
              For standardized tests, Entrance Exam Preparation provides resources and guidance for exams like IELTS, TOEFL, GRE, GMAT, and PTE. This can include study materials, mock tests, and coaching to help students achieve the required scores for their chosen institutions.
            </p>
           
          </div>
        </div>
        <div className="program">
          <img src={program_3} alt="Entrepreneurship" />
          <div className="program-content">
            <h3>Funding and pre-departure training </h3>
            <p>
              Assistance with funding is crucial, as the service helps students explore various financial avenues like scholarships, grants, and education loans. Before departure, pre-departure training prepares them for life abroad, covering visa processes, cultural adaptation, financial management, and local laws for a smooth transition.
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Programs;
