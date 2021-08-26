import React from 'react'
import data from './data'
import upcomingstartupdata from './upcomingstartupdata'
import Features from './feartures'
import Banner from './barner'
import Navbar from '../../navbar/home'
import GalaryImage from './image'
import './featuredstartups.css'

const Feature = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <div className="incubator-container">
                <div className="incubator-body">
                    <div className="incubator-title">
                        <h3 className="incubator-body-h3">Featured Startups </h3>
                        <p className="incubator-body-p">Invest in the next billion dolar company today</p>
                    </div>
                    <i className="fas fa-arrow-left left-arrow-mangoswap-content"></i>
                    <div className="incubator-content">
                        {data.map((feature) => {
                        return <Features key={feature.id} {...feature}/>;
                            })}
                     <i className="fas fa-arrow-right left-arrow-mangoswap-content"></i>
                    </div>
                </div>
                <GalaryImage />
                <div className="incubator-body">
                    <div>
                        <h3 className="incubator-body-h3">Upcoming Startups</h3>
                        <p className="incubator-body-p">These visionary companies and disruptors are on their journey to change the world.</p>
                    </div>
                    <div className="incubator-content">
                        {data.map((feature) => {
                        return <Features key={feature.id} {...feature}/>;
                            })}
                    </div>
                </div>
                <div className="upcoming-body">
                    <div className="upcoming-content">
                        {upcomingstartupdata.map((feature) => {
                        return <Features key={feature.id} {...feature}/>;
                            })}
                    </div>
                </div>
                <div className="upcoming-body">
                    <div className="upcoming-content">
                        {upcomingstartupdata.map((feature) => {
                        return <Features key={feature.id} {...feature}/>;
                            })}
                    </div>
                </div>
                <button className="incubator-load-more-button">Load More</button>
            </div>
        </div>
    )
}

export default Feature
