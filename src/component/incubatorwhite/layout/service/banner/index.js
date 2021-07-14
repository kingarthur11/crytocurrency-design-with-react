import React from 'react'
import './banner.css'
import Mask from '../../../../../asset/MaskGroup.svg'
import Curv from '../../../../../asset/curvservice.svg'

const Barner = () => {
    return (
        <div>
            <section class="gallery-section">
                <div>
                    <div className="banner-content">
                        <div className="banner-svg">
                            <img className="service-curv-image" src={Curv} />
                            <img className="service-mask-image" src={Mask} />
                        </div>
                        <div className="banner-text">
                            <p className="banner-p">Welcome back, Shot</p>
                            <h5 className="banner-service-h5">75% Completed</h5>
                            <button className="banner-button">Resume</button>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Barner