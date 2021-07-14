import React from 'react'
import data from './data'
import CourseContent from './details'

const Cryptocourse = () => {
    return (
        <div>
            <div className="vidoe-content">
                <div className="video">
                    {data.map((feature) => {
                    return <CourseContent key={feature.id} {...feature}/>;
                        })}
                </div>
            </div>
        </div>
    )
}

export default Cryptocourse