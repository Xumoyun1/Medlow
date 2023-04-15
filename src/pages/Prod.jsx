import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_PATH } from '../tools/constant';
import { useEffect } from 'react';
import { getText } from '../locales'

const Prod = () => {
    const [pk, setPk] = useState(localStorage.getItem('PRODUCT') || '')
    const [product, setProduct] = useState([])

    const getProduct = () => {
        axios.get(API_PATH + `user/product/${pk}/`)
            .then((res) => {
                setProduct(res.data)
            })
    }

    useEffect(() => {
        getProduct();
    }, [])



    const [thumbsSwiper, setThumbsSwiper] = useState(null);


    return (
        <>
            <div className="Prod">
                <div className="prod_nav">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex align-items-center">
                                <Link to="/shop" className="prod_nav_a">
                                    <img className='' src="/img/prod_nav_left.png" alt="" />
                                    <div className="prod_nav_a_h">
                                        {getText('nav_3')}
                                    </div>
                                </Link>
                                <img src="/img/prod_nav_right.png" alt="" className="prod_nav_right" />
                                <div className="prod_nav_h">
                                    {product.name}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="CardMain">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="swiper_box">
                                <Swiper
                                    loop={true}
                                    spaceBetween={10}
                                    navigation={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper2"
                                >
                                    {product.product_images && product.product_images.map((item, index) => {
                                        return (
                                            <SwiperSlide key={index} >
                                                <div className="c_main_swiper_box">
                                                    <img alt="" src={item.image} />
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    loop={true}
                                    spaceBetween={20}
                                    slidesPerView={4}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper"
                                >
                                    {product.product_images && product.product_images.map((item, index) => {
                                        return (
                                            <SwiperSlide key={index} >
                                                <div className="c_main_swiper_box_2">
                                                    <img alt="" src={item.image} />
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })}

                                </Swiper>
                            </div>
                        </div>
                        <div className="col-lg-7 d-flex flex-column justify-content-between">
                            <div className="c_main_up">
                                <div className="c_main_name">
                                    {product.name}
                                </div>
                                <div className="c_main_sale">
                                    <div className="c_main_sale_true">{product.price} UZS </div>
                                </div>
                                <div className="c_main_info_box">
                                    <div className="c_main_info">
                                        <div className="c_main_info_img"><img className="c_main_info_icon" src="/img/c_main_1.png" alt="" /></div>
                                        <div className="c_main_info_name">{getText("c_main_info_name_1")}</div>
                                        <div className="c_main_info_p">{product.delivery}</div>
                                    </div>
                                    <div className="c_main_info">
                                        <div className="c_main_info_img"><img className="c_main_info_icon" src="/img/c_main_2.png" alt="" /></div>
                                        <div className="c_main_info_name">{getText("c_main_info_name_2")}</div>
                                        <div className="c_main_info_p">{product.own_phone}</div>
                                    </div>
                                    <div className="c_main_info">
                                        <div className="c_main_info_img"><img className="c_main_info_icon" src="/img/c_main_3.png" alt="" /></div>
                                        <div className="c_main_info_name">{getText("c_main_info_name_3")}</div>
                                        <div className="c_main_info_p">{product.type_cash}</div>
                                    </div>
                                    <div className="c_main_info">
                                        <div className="c_main_info_img"><img className="c_main_info_icon" src="/img/c_main_4.png" alt="" /></div>
                                        <div className="c_main_info_name">{getText("c_main_info_name_4")}</div>
                                        <div className="c_main_info_p">{product.return_day}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="c_main_down">
                                <div className="c_main_btn">
                                    <div>
                                        {getText('order')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="CardDesc">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="c_desc_name">
                                {getText("c_desc_name_1")}
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="c_desc_p_2">{product.description}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="CardDesc">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="c_desc_name">
                                {getText("c_desc_name_2")}
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="c_desc_text">
                                <div className="c_desc_h">{getText("c_desc_h_1")}</div>
                                <div className="c_desc_p">{product.install}</div>
                            </div>
                            <div className="c_desc_text">
                                <div className="c_desc_h">{getText("c_desc_h_2")}</div>
                                <div className="c_desc_p">{product.modul}</div>
                            </div>
                            <div className="c_desc_text">
                                <div className="c_desc_h">{getText("c_desc_h_3")}</div>
                                <div className="c_desc_p">{product.ryad}</div>
                            </div>
                            <div className="c_desc_text">
                                <div className="c_desc_h">{getText("c_desc_h_4")}</div>
                                <div className="c_desc_p">{product.door}</div>
                            </div>
                            <div className="c_desc_text">
                                <div className="c_desc_h">{getText("c_desc_h_5")}</div>
                                <div className="c_desc_p">{product.avtomat}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Prod