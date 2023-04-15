import React from 'react'
import { getText } from '../locales'

const About = () => {
    return (
        <>
            <div className="About">
                <div className="about_head">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="about_head_name">
                                    {getText("nav_1")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about_body">
                    <img className='about_body_logo' src="/img/about_back.png" alt="" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <img src="/img/about_logo.png" alt="" className="about_logo" />
                                <div className="about_body_h">{getText("about_body_h_1")}
                                </div>
                                <div className="about_body_h">{getText("about_body_h_2")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about_adv">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="about_adv_name">
                                    {getText("about_adv_name")}
                                </div>
                            </div>

                        </div>
                        <div className="row justify-content-lg-between justify-content-start">
                            <div className="col-lg-2">
                                <div className="about_adv_box">
                                    <img src="/img/about_adv_1.png" alt="" />
                                    <div className="about_adv_box_h">{getText("about_adv_box_h_1")}</div>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="about_adv_box">
                                    <img src="/img/about_adv_2.png" alt="" />
                                    <div className="about_adv_box_h">{getText("about_adv_box_h_2")}</div>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="about_adv_box">
                                    <img src="/img/about_adv_3.png" alt="" />
                                    <div className="about_adv_box_h">{getText("about_adv_box_h_3")}</div>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="about_adv_box">
                                    <img src="/img/about_adv_4.png" alt="" />
                                    <div className="about_adv_box_h">{getText("about_adv_box_h_4")}</div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-lg-between justify-content-start">
                            <div className="col-lg-1"></div>
                            <div className="col-lg-2">
                                <div className="about_adv_box">
                                    <img src="/img/about_adv_5.png" alt="" />
                                    <div className="about_adv_box_h">{getText("about_adv_box_h_5")}</div>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="about_adv_box">
                                    <img src="/img/about_adv_6.png" alt="" />
                                    <div className="about_adv_box_h">{getText("about_adv_box_h_6")}</div>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="about_adv_box">
                                    <img src="/img/about_adv_7.png" alt="" />
                                    <div className="about_adv_box_h">{getText("about_adv_box_h_7")}</div>
                                </div>
                            </div>
                            <div className="col-lg-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About