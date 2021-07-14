import React from 'react'
import './banner.css'
import Mask from '../../../asset/map.png'

const Barner = () => {
    return (
        <div>
            <section class="map-section">
                <div>
                    <div className="map-content">
                        <div className="map-svg">
                            <img className="map-image" src={Mask} />
                        </div>
                        <div className="map-text">
                            <p className="banner-p">Learn high in demand IT Skills & Get Crypto</p>
                            <i className="home-banner-h5">powered by <span>KoinStreet</span></i>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Barner