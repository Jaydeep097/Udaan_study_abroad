import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className="play-icon" onClick={()=> 
                {setPlayState(true)}} />
        </div>
        <div className='about-right'>
            <h3> About Udaan Cell </h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>
                "Udaan" is a program offered by the Bansal Group of Institutes (BGI) to support students in their journey to higher education, particularly for studies abroad.
            </p>
            <p>
                 Application and Admission Process: Assists with university applications, including required documents and deadlines.
            </p>    
            <p>
                Entrance Exam Preparation: Provides resources and guidance for exams like IELTS, TOEFL, GRE, GMAT, and PTE
            </p>
            <p>
                This comprehensive service streamlines the entire study abroad journey. It starts with career counseling to help students choose the right academic path, followed by expert assistance with university applications and entrance exam preparation. They also help secure funding, provide vital pre-departure training, and handle travel logistics including foreign exchange and flight bookings, culminating in arrival support to ensure a smooth transition into their new environment.
            </p>
        </div>
    </div>
  )
}

export default About