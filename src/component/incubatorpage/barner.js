import React from 'react'
import './barner.css'
import barnerImage from '../../asset/Rectangle 839.png'

const Barner = () => {
    return (
        <div>
            <section className="incubator-banner-section">
                <img className="incubator-banner-image" src={barnerImage} alt="name"/>
                <div className="incubator-banner-text">
                    <p className="incubator-barner-p">Invest diretly into minority innovations</p>
                    <button className="incubator-barner-button">View Startups</button>
                </div>
            </section>
        </div>
    )
}

export default Barner
