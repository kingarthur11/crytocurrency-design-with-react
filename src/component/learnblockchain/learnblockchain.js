import React from 'react'
import Learnblockchains from './learnblockchains'
import Banner from './banner'
import './learn.css'
import data from './data'

const Learnblockchain = () => {
    console.log(data)
    return (
        <div>
            <Banner />
            <div className="learn-blockchain-body">
                <div className="learn-search">
                    <input className="blockchain-search-input" type="text" placeholder="What event are you looking for?"/>
                    <span><i class="fas fa-search learn-search-fontawsome"></i></span>
                </div>
                    <h3 className="blockchain-list-h3">My Courses</h3>
                    <hr />
                <div>
                    <div className="learn-blockchain-content">
                        {data.map((feature) => {
                        return <Learnblockchains key={feature.id} {...feature}/>;
                            })}
                    </div>
                </div>
                
            </div>
           
        </div>
    )
}

export default Learnblockchain
