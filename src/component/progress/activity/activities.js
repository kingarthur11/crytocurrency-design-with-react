import React from 'react'

const Cryptocousres = ({title, imag, num, button}) => {
    return (
        <div>
            <div className="progress-card">
                <div>
                    <img className="progress-image" src={imag} alt="name"/>
                    <h3 className="progress-card-h3">Activity{num} - {title}</h3>
                </div>
                {
                    button === 'Completed' ? <button className="progress-complete-button">Completed</button>
                    : button === 'In Progress' ? <button className="progress-inprogress-button">In Progress</button>
                    : <button className="progress-start-button">Start</button>
                }
            </div>
        </div>
        
    )
}

export default Cryptocousres