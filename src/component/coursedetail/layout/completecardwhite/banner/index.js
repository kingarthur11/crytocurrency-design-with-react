import React from 'react'
import imag from '../../../../../asset/coursevideo.png'
import Mask from '../../../../../asset/MaskGroup.svg'
import Curv from '../../../../../asset/curvservice.svg'
import './banner.css'

const Barner = () => {
    return (
        <div>
            <section class="pause-section">
                <div>
                    <div>
                        <img className="course-video" src={imag} />
                    </div>
                    <div className="banner-content-complete-white">
                        <h3 className="complete-activity">Activity Completed!</h3>
                        <div>
                            <img className="curv-image-complete" src={Curv} />
                            <img className="mask-image-complete" src={Mask} />
                        </div>
                        <div className="">
                            <h4 className="complete-percent">90% Complete</h4>
                            <h5 className="just-completed">You just completed</h5>
                            <h4 className="activity-join">Activity 1: Join Clickup</h4>
                            <button className="lesson-button">Go to Next Lesson</button>
                            <p className="complete-cancel">Cancel</p>
                        </div>
                    </div>
                    <div className="transparent-background">  
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