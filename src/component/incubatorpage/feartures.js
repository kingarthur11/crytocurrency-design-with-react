import React from 'react'



const FeaturedStartups = ({title, numerator, denominator, des, percent, imag}) => {
    return (
        <div>
            <div className="mangoswap">
                <div className="mangoswap-header">
                    <span><img src={imag} alt="name"/></span>
                    <h4 className="mangoswap-h4">{title}</h4>
                </div>
                <div>
                    <p className="mangoswap-p">{des}</p>
                </div>
                <div className="flex-space-around">
                    <h4 className="fund-raise-h4">Fund raise</h4>
                    <p className="fund-raise-p">%{percent} <span>complete</span></p>
                </div>
                <h3 className="fund-raise-h4">${numerator}/${denominator}</h3>
                <hr className="mangoswap-horizontal-line"/>
                <hr className="mangoswap-horizontal-line-gray"/>
                <div className="mangoswap-button">
                    <button className="mangoswap-button-blue">Fund Startup</button>
                    <button className="mangoswap-button-white">Learn more</button>
                </div>
            </div>
        </div>
        
    )
}

export default FeaturedStartups
