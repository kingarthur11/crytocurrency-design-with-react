import React from 'react'

const Learnblockchains = ({title, earn, heading, numerator, denominator, percent}) => {
    return (
        <div>
            <div className="blockchain-list">
                <div className="blockchain-body">
                    <div className="learn-card">
                        <button className="earn-button"><i className="fas fa-circle dot"></i>Earn ${earn}</button>
                        <h3 className="blockchain-card-h2">{heading}</h3>
                        <h5 className="blockchain-card-h3">{title}</h5>
                        <button className="blockcain-card-button">Learn</button>
                        <h5 className="blockchain-card-modules">{numerator}/{denominator} Modules </h5>
                        <hr />
                        <p className="blockchain-card-p">{percent}% Completed</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Learnblockchains
