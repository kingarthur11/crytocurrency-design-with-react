import React from 'react'
import data from './data'
import Cryptocourses from './activities'

const Cryptocourse = () => {
    return (
        <div>
            <div className="progress-content">
                <div>
                    <span className="progress-arrow">
                        <i class="fas fa-arrow-left"></i>
                        <i class="fas fa-arrow-right"></i>
                    </span>
                </div>
                <div className="progress">
                    {data.map((feature) => {
                    return <Cryptocourses key={feature.id} {...feature}/>;
                        })}
                </div>
            </div>
        </div>
    )
}

export default Cryptocourse