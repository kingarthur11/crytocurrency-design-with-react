import React from 'react'
import imag from '../../../../../asset/coursevideo.png'
import './banner.css'

const Barner = () => {
    return (
        <div>
            <section class="pause-section">
                <div>
                    <div>
                        <img className="course-video" src={imag} />
                    </div>
                    <div className="play-background-center">
                        <i class="fas fa-play progress-button-center"></i> 
                    </div>
                    <div className="play-background">  
                        <i class="fas fa-play progress-button"></i> 
                        <span className="time">12:00</span>
                        <span className="progress-horizontal-line"></span>
                        <span>
                            <i class="fas fa-circle progress-circle"></i>
                            <hr className="progress-horizontal"/>
                            <i class="fas fa-volume-up progress-speaker"></i>
                            <i class="fas fa-cog progress-setting"></i>
                            <i class="fas fa-expand progress-expand"></i>
                        </span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Barner