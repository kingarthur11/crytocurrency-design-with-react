import React from 'react'
import imag from '../../../../../asset/coursevideo.png'
import './banner.css'

const Barner = () => {
    return (
        <div>
            <section className="pause-section">
                <div>
                    <div>
                        <img className="course-video" src={imag} alt="name"/>
                    </div>
                    <div className="transparent-background-center">
                        <i className="fas fa-play progress-button-center"></i> 
                    </div>
                    <div className="transparent-gray-background">  
                        <i className="fas fa-play progress-button"></i> 
                        <span className="time">12:00</span>
                        <span className="progress-horizontal-line"></span>
                        <span>
                            <i className="fas fa-circle progress-circle"></i>
                            <hr className="progress-horizontal"/>
                            <i className="fas fa-volume-up progress-speaker"></i>
                            <i className="fas fa-cog progress-setting"></i>
                            <i className="fas fa-expand progress-expand"></i>
                        </span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Barner