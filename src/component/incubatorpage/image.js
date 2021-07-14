import React from 'react'
import imag1 from '../../asset/Rectangle 840.png'
import imag2 from '../../asset/Rectangle 842.png'
import imag3 from '../../asset/Rectangle 849.png'

const Imageview = () => {
    return (
        <div className="flex-space-center mangoswap-image">
            <div>
                <img className="advice-image" src={imag1}  alt="name"/>
                <button className="advice-image-button-advice">Advice a startup</button>
            </div>
            <div>
                <img className="advice-image" src={imag3}  alt="name"/>
                <button className="advice-image-button-join">Join Minority Ventures Cohort</button>
            </div>
            <div>
                <img className="advice-image" src={imag2} alt="name"/>
                <button className="advice-image-button-help">Help Code</button>
            </div>
        </div>
    )
}

export default Imageview
