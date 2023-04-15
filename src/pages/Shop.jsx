import React from 'react'
import HeadProd from '../components/HeadProd'
import { getText } from '../locales'

const Shop = () => {
    return (
        <>
            <div className="Shop">
                <div className="shop_head">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="shop_head_name">
                                    {getText("nav_3")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HeadProd />
        </>
    )
}

export default Shop