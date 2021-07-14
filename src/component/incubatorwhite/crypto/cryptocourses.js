import React from 'react'

const Cryptocousres = ({title, week, percent, button}) => {
    return (
        <div>
            <div className="crypto-card">
                {       
                    button == 'Completed' ? <button className="crypto-complete-button">Completed</button>
                    : <button className="crypto-progress-button">In Progress</button>
                }
                <h3 className="crypto-card-h3">Week {week} -  {title}</h3>
                <hr className="crypto-card-horizontal"/>
                <h5 className="crypto-card-h5">{percent}% completed</h5>
            </div>
        </div>
        
    )
}

export default Cryptocousres