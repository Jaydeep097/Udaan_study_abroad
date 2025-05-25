import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/harshit.jpg'
import user_3 from '../../assets/mayank.jpg'
import user_4 from '../../assets/sandeep.jpg'


const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

     const slideForward = () => {
        if(tx > -50){
            tx -= 25;
        }
       slider.current.style.transform = `translateX(${tx}%)`
     }
     const slideBackward = () => {
        if(tx < 0){
            tx += 25;
        }
       slider.current.style.transform = `translateX(${tx}%)`
     }



  return (
    <div className="testimonials">
        <img src={next_icon} alt="" className='next-btn' onClick=
        {slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick=
        {slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Pakhi Singh</h3>
                                <span>Duke University, USA</span>
                            </div>
                        </div>
                        <p>Choosing Udaan Cell was a turning point in my academic journey. Their expert guidance for university selection, visa support, and exam prep made studying abroad feel achievable. I’m now confidently chasing my dreams, thanks to their incredible support.</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>harshit </h3>
                                <span>Sheridon college ,canada</span>
                            </div>
                        </div>
                        <p>Udaan Cell made the complex process of studying abroad so smooth and structured. From selecting the right course to securing scholarships, every step felt easier. Their team’s dedication and knowledge gave me the clarity and confidence I needed.</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Pranav Mishra</h3>
                                <span>University of Leeds ,UK</span>
                            </div>
                        </div>
                        <p>I always wanted to study abroad but didn’t know where to start. Udaan Cell helped with everything—country selection, exams, and the visa process. Their six-step approach was clear and effective. I’m truly grateful for their support.</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Sandeep patel</h3>
                                <span>Edisity ,USA</span>
                            </div>
                        </div>
                        <p>Thanks to Udaan Cell, I’m now pursuing my dream education overseas. Their personalized guidance, especially with IELTS and application tracking, was outstanding. I felt supported every step of the way. I highly recommend them to every aspiring student.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials