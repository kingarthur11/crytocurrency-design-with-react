import React from 'react'
import './banner.css'
import Mask from '../../../../../asset/MaskGroup.svg'
import Curv from '../../../../../asset/Group 246.svg'

const Barner = () => {
    return (
        <div>
            <section className="home-section">
                <div>
                    <div className="banner-content">
                        <div className="banner-svg">
                            <img className="home-curv-image" src={Curv} alt="name"/>
                            <img className="home-mask-image" src={Mask} alt="name"/>
                        </div>
                        <div className="banner-text">
                            <p className="banner-p">Welcome back, Shot</p>
                            <h5 className="home-banner-h5">75% Completed</h5>
                            <button className="banner-button">Resume</button>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Barner