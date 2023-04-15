import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getText } from '../locales'
import axios from 'axios';
import { API_PATH } from '../tools/constant';
import { useEffect } from 'react';

const HeadProd = () => {
    const [activeTab, setActiveTab] = useState('1');
    const [category, setCategory] = useState([])
    const [product, setProduct] = useState([])
    const [pk, setPk] = useState('')

    const nav = useNavigate()

    const getCat = () => {
        axios.get(API_PATH + 'user/category/')
            .then((res) => {
                setCategory(res.data)
            })
    }

    const getProduct = () => {
        axios.get(API_PATH + `user/product/?category=${pk}`)
            .then((res) => {
                setProduct(res.data)
            })
    }

    useEffect(() => {
        getCat();
        getProduct();
    }, [pk])


    const link = (i) => {
        localStorage.setItem('PRODUCT', i)
        nav('/prod')
    }


    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const location = useLocation()

    return (
        <>
            <div className="HeadProd">
                <div className="container">
                    <div className="row">

                        <div className="col-12">
                            <div className="h_prod_h">{getText("nav_3")}</div>
                        </div>
                        <div className="col-12 d-flex flex-lg-wrap flex-row mb-5 overflow-auto">
                            {category && category.map((item, index) => {
                                return (
                                    <div key={index} onClick={() => setPk(item.id)} className={`head_prod_name ${pk === item.id ? 'active' : ''}`}>
                                        {item.name}
                                    </div>
                                )
                            })}
                        </div>
                        {product && product.map((item, index) => {
                            return (
                                <div key={index} className="col-lg-4 col-sm-6 mb-5">
                                    <div className="head_prod_box">
                                        <div className="head_prod_top">
                                            <div className="head_prod_img_box">
                                                <img src={item.product_images[0].image} alt="" className="head_prod_img" />
                                            </div>
                                            <div className="head_prod_name_2">{item.name}</div>
                                            <div className="head_prod_p">{item.description.slice(0, 70)}... </div>
                                            <div onClick={() => link(item.id)} className="head_prod_link">
                                                {getText("head_prod_link")}
                                            </div>
                                        </div>
                                        <a href="" className="head_prod_a">
                                            <div>{getText("order")}</div>
                                        </a>
                                    </div>
                                </div>
                            )
                        })}
                        <div className="col-12 d-flex justify-content-center">
                            <Link to="/shop" className={`h_prod_link ${location.pathname === "/shop" ? 'd-none' : ''}`}>
                                <div>{getText("order_all")}</div> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeadProd


