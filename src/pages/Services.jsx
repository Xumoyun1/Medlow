import React from 'react'
import HeadAbout from '../components/HeadAbout'
import { getText } from '../locales'


const Services = () => {
    return (
        <>
            <div className="Services">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="ser_name">
                                {getText("nav_2")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HeadAbout />
        </>
    )
}

export default Services