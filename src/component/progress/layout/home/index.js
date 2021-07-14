import React from 'react'
import Cryptocourse from '../../activity/activity'
import Cryptosidebar from '../../sidebar/cryptosidebar'
import Banner from './banner'
import Navbar from '../../../../navbar/home'
import '../../incubator.css'

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="crypto-body">
                <Cryptosidebar />
                <div>
                    <Banner />
                    <Cryptocourse />
                </div>
            </div>
        </div>
    )
}

export default Home