import React from 'react'
import data from './data'
import Cryptocourses from './cryptocourses'

const Cryptocourse = () => {
    return (
        <div>
            <div className="crypto-content">
                <div className="crypto-list-content">
                    <ul className="crypto-list">
                        <li className="line-effect">Modules</li>
                        <li className="crypto-list-li">Calender</li>
                        <li className="crypto-list-li">Messages</li>
                        <div className="underline-effect"></div>
                    </ul>
                    
                </div>
                <div className="crypto">
                    {data.map((feature) => {
                    return <Cryptocourses key={feature.id} {...feature}/>;
                        })}
                </div>
            </div>
        </div>
    )
}

export default Cryptocourse