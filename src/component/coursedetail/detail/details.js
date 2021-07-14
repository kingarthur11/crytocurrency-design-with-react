import React from 'react'

const Cryptocousres = ({title, header1, header2, time, num}) => {
    return (
        <div>
            <div className="video-card">
                <h3 className="video-card-header1">Activity{num} - {title}</h3>
                <p className="video-card-time">{time}minutes</p>
                <h3 className="video-card-header2">Header</h3>
                <p className="video-card-page">{header1}</p> 
                <h3 className="video-card-header4">Header</h3>
                <p className="video-card-page">{header2}</p>                               
            </div>
        </div>
        
    )
}

export default Cryptocousres