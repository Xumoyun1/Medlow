import React from 'react'
import { useLocation } from 'react-router-dom'
import { getText } from '../locales'

const HeadAbout = () => {

    const location = useLocation()

    return (
        <>
            <div className="HeadAbout">
                <div className="container">
                    <div className="row">
                        <div className={`col-12 ${location.pathname === '/services' ? 'd-none' : ''}`}>
                            <div className="h_a_box">
                                <div className="h_a_box_h">{getText("h_a_box_h")}</div>
                                <div className="h_a_box_p">{getText("h_a_box_p")}</div>
                                <a href="" className="head_a_box_a">
                                    <div>{getText("more")}</div>
                                </a>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="h_a_name">
                                {getText("h_a_name")}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h_a_main">
                    <img src="/img/h_a_main_1.png" alt="" className="h_a_main_1" />
                    <div className="container">
                        <div className="row justify-content-end">
                            <div className="col-lg-6">
                                <div className="h_a_main_h">{getText("h_a_main_h_1")}</div>
                                <div className="h_a_main_p">{getText("h_a_main_p_1")}</div>
                                <div className="h_a_main_box">
                                    <a href="" className="h_a_main_a_1">
                                        <div>
                                            {getText("more")}
                                        </div>
                                    </a>
                                    <a href="" className="h_a_main_a_2">
                                        <div>
                                            {getText("submit")}
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h_a_main">
                    <img src="/img/h_a_main_2.png" alt="" className="h_a_main_2" />
                    <div className="container">
                        <div className="row ">
                            <div className="col-lg-6">
                                <div className="h_a_main_h">{getText("h_a_main_h_2")}</div>
                                <div className="h_a_main_p">{getText("h_a_main_p_2")}</div>
                                <div className="h_a_main_box">
                                    <a href="" className="h_a_main_a_1">
                                        <div>
                                            {getText("more")}
                                        </div>
                                    </a>
                                    <a href="" className="h_a_main_a_2">
                                        <div>
                                            {getText("submit")}
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h_a_main">
                    <img src="/img/h_a_main_3.png" alt="" className="h_a_main_1" />
                    <div className="container">
                        <div className="row justify-content-end">
                            <div className="col-lg-6">
                                <div className="h_a_main_h">{getText("h_a_main_h_3")}</div>
                                <div className="h_a_main_p">{getText("h_a_main_p_3")}</div>
                                <div className="h_a_main_box">
                                    <a href="" className="h_a_main_a_1">
                                        <div>
                                            {getText("more")}
                                        </div>
                                    </a>
                                    <a href="" className="h_a_main_a_2">
                                        <div>
                                            {getText("submit")}
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeadAbout