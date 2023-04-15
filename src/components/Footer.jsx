import React from 'react'
import { Link } from 'react-router-dom'
import { getText } from '../locales'

const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-2 d-flex align-items-center">
                            <img src="/img/logo.png" alt="" className="foot_logo" />
                        </div>
                        <div className="col-lg-5 d-flex flex-lg-row flex-column justify-content-between align-items-lg-center  align-items-start">
                            <Link to="/about" className="foot_a">{getText("nav_1")}</Link>
                            <Link to="/" className="foot_a">{getText("nav_2")}</Link>
                            <Link to="/" className="foot_a">{getText("nav_3")}</Link>
                            <Link to="/contact" className="foot_a">{getText("nav_4")}</Link>
                        </div>
                        {/* <div className="col-lg-4 d-flex flex-column justify-content-center align-items-lg-end align-items-start">
                            <div className="foot_h">
                                {getText('contact_us')}
                            </div>
                            <form className="foot_box">
                                <input placeholder={getText("tel_num")} type="text" name="" id="" className="foot_inp" />
                                <button className="foot_btn">{getText("send")}</button>
                            </form>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer