import React from 'react'
import mangoswapImage from '../../asset/mangoswap.png'
import Navbar from '../../navbar/home'
import './mangoswap.css'

const Mangoswap = () => {
    return (
        <div>
            <Navbar />
            <div className="mangoswap-content">
                <div>
                    <div className="mangoswap-header-content">
                        <div className="mangoswap-header">
                            <div className="mangoswap-logo">
                                <i class="fas fa-arrow-left left-arrow-mangoswap"></i>
                                <img src={mangoswapImage} alt="name" />
                                <h3 className="mangoswap-logo-h3">Mangoswap</h3>
                            </div>
                            <div>
                                <div className="mangoswap-logo-fund">
                                    <h4>Funds raised</h4>
                                    <p>50% complete</p>
                                </div>
                                <h3 className="mangoswap-logo-h3">$200,000/$400,000</h3>
                            </div>
                            <div>
                                <hr className="mangoswap-horizontal-colo"/>
                                <hr className="mangoswap-horizontal-gray"/>
                            </div>
                            <button className="fund-mangoswap-button">Fund Startup</button>
                        </div>
                    </div>
                    <div className="mangoswap-body">
                        <div className="mangoswap-sidebar">
                            <div className="mangoswap-sidebar-header">
                                <p>Founded 17th May, 2015</p>
                            </div>
                            <hr />
                            <div className="mangoswap-sidebar-info">
                                <div className="mangoswap-sidebar-contact">
                                    <small>Website</small>
                                    <p>
                                        mangoswap.com
                                        <span>
                                            <i class="fab fa-twitter mangoswap-fontawsome"></i>
                                            <i class="fab fa-instagram mangoswap-fontawsome"></i>
                                            <i class="fab fa-facebook-square mangoswap-fontawsome"></i>
                                        </span>
                                    </p>
                                </div>
                                <div className="mangoswap-sidebar-space">
                                    <small>Location</small>
                                    <p>San Francisco, California</p>
                                </div>
                                <div className="mangoswap-sidebar-space">
                                    <small>Team Size</small>
                                    <p>100-500 people</p>
                                </div>
                            </div>
                            <hr />
                            <div className="mangoswap-sidebar-name">
                                <p>Meet the team</p>
                                <div className="mangoswap-sidebar-persons">
                                    <i class="fas fa-circle  mangoswap-sidebar-fontawsome-circlr"></i>
                                    <div>
                                        <h4>Edmund Kitan</h4>
                                        <p>Founder</p>
                                    </div>
                                </div>
                                <div className="mangoswap-sidebar-persons">
                                    <i class="fas fa-circle  mangoswap-sidebar-fontawsome-circlr"></i>
                                    <div>
                                        <h4>Edmund Kitan</h4>
                                        <p>Founder</p>
                                    </div>
                                </div>
                                <div className="mangoswap-sidebar-persons">
                                    <i class="fas fa-circle  mangoswap-sidebar-fontawsome-circlr"></i>
                                    <div>
                                        <h4>Edmund Kitan</h4>
                                        <p>Founder</p>
                                    </div>
                                </div>
                                <div className="mangoswap-sidebar-persons">
                                    <i class="fas fa-circle  mangoswap-sidebar-fontawsome-circlr"></i>
                                    <div>
                                        <h4>Edmund Kitan</h4>
                                        <p>Founder</p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="mangoswap-sidebar-name">
                                <p>Tags</p>
                                <div>
                                    <button className="mangoswap-sidebar-button">Crypto</button>
                                    <button className="mangoswap-sidebar-button">Exchanges</button>
                                    <button className="mangoswap-sidebar-button">NFT</button>
                                    <button className="mangoswap-sidebar-button">Blockchain</button>
                                </div>
                            </div>
                        </div>
                        <div className="mangoswap-about">
                            <h3>About startup</h3>
                            <p className="mangoswap-p">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint</p>
                            <hr />
                            <h3>Vision</h3>
                            <p className="mangoswap-p">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mangoswap
