import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { getText } from '../locales'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper";
import { useState } from 'react';
import axios from 'axios';
import { API_PATH } from '../tools/constant';
import { useEffect } from 'react';

const HeadReview = () => {
    const [review, setReview] = useState([])

    const getReview = () => {
        axios.get(API_PATH + 'user/review/')
            .then((res) => {
                setReview(res.data);
            })
    }

    useEffect(() => {
        getReview();
    }, [])

    return (
        <>
            <div className="HeadReview">
                <div className="head_rev_box">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="h_r_box_name">
                                    {getText("review")}
                                </div>
                            </div>
                            <div className="col-12">
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={30}

                                    breakpoints={{
                                        767: {
                                            slidesPerView: 3,
                                        },
                                        576: {
                                            slidesPerView: 2,
                                        },
                                    }}

                                    loop={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    autoplay={{
                                        delay: 3500,
                                        disableOnInteraction: false,
                                    }}
                                    navigation={true}
                                    modules={[Pagination, Navigation, Autoplay]}
                                    className="mySwiper"
                                >

                                    {review && review.map((item, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="slider_box">
                                                    <div className="slider_h">
                                                        {item.text}
                                                    </div>
                                                    <div className="slider_info">
                                                        <img src="/img/slider_img.png" alt="" />
                                                        <div className="slider_info_box">
                                                            <div className="slider_info_name">
                                                                {item.name}
                                                            </div>
                                                            <div className="slider_info_prof">
                                                                {item.specialist}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="head_con">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-12">
                                <div className="head_con_name">
                                    {getText("nav_4")}
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <a target={'_blank'} rel="noreferrer" href='https://maps.windows.com/?form=WNAMSH&collection=point.41.306862_69.236892_Point' className="head_con_box">
                                    <div className="head_con_box_text">
                                        <img src="/img/h_con_1.png" alt="" />
                                        <div className="head_con_box_main">
                                            <div className="head_con_box_main_h">{getText("address")}</div>
                                            <div className="head_con_box_main_p">{getText("address_2")}</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <a href='tel:+998889030023' className="head_con_box">
                                    <div className="head_con_box_text">
                                        <img src="/img/h_con_2.png" alt="" />
                                        <div className="head_con_box_main">
                                            <div className="head_con_box_main_h">{getText("tel")}</div>
                                            <div className="head_con_box_main_p">+998 88 903 00 23</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <a target={'_blank'} rel="noreferrer" href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=info@medlow.uz' className="head_con_box">
                                    <div className="head_con_box_text">
                                        <img src="/img/h_con_3.png" alt="" />
                                        <div className="head_con_box_main">
                                            <div className="head_con_box_main_h">E - mail</div>
                                            <div className="head_con_box_main_p">info@medlow.uz</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="head_map">
                    <iframe className='maps_map' src="https://yandex.ru/map-widget/v1/?um=constructor%3A1eb33b947e107fe6476fbe1fa9b00882b4fce3a34cb98cd445a5aa6f583bbe5d&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>
                </div>
            </div>
        </>
    )
}

export default HeadReview