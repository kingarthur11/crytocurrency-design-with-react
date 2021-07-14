import React from 'react'
import Cryptocourse from '../../detail/detail'
import Cryptosidebar from '../../sidebar/cryptosidebar'
import Navbar from '../../../../navbar/content'
import Banner from './banner'
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