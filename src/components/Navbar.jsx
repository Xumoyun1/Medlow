import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LANGUAGE } from '../tools/constant'
import { getLanguage, getText } from '../locales'

const Navbar = () => {

    const [burger, setBurger] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const location = useLocation();

    const changeLanguage = (e) => {
        localStorage.setItem(LANGUAGE, e.target.value);
        document.location.reload(true)
    }

    const changeNavbar = () => {
        if (window.scrollY >= 30) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeNavbar)




    return (
        <>
            <div className="nav_top">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-between">
                            <a target={'_blank'} rel="noreferrer" href="https://maps.windows.com/?form=WNAMSH&collection=point.41.306862_69.236892_Point" className="nav_top_a">
                                <img src="/img/nav_top_1.png" alt="" />
                                <div className="nav_top_h">{getText("nav_5")}</div>
                            </a>
                            <a href="tel:+998889030023" className="nav_top_a">
                                <img src="/img/nav_top_2.png" alt="" />
                                <div className="nav_top_h">+998 88 903 00 23</div>
                            </a>
                            <div className="nav_top_a">
                                <img src="/img/nav_top_3.png" alt="" />
                                <select onChange={changeLanguage} name="" id="">
                                    <option selected={getLanguage() === "uz"} value="uz">Uz</option>
                                    <option selected={getLanguage() === "ru"} value="ru">Ру</option>
                                    <option selected={getLanguage() === "en"} value="en">En</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`Navbar ${navbar ? 'active' : ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-6 d-flex align-items-center justify-content-between">
                            <Link to="/" className="nav_logo d-lg-flex d-none">
                                <img src="/img/logo.png" alt="" />
                            </Link>
                            <Link to="/" className="nav_logo d-lg-none d-flex">
                                <img src="/img/logo_2.png" alt="" />
                            </Link>
                            <Link to="/about" className={`nav_a ${location.pathname === "/about" ? "active" : ''} d-lg-flex d-none`}>
                                {getText('nav_1')}
                            </Link>
                            <Link to="/services" className={`nav_a ${location.pathname === "/services" ? "active" : ''} d-lg-flex d-none`}>
                                {getText('nav_2')}
                            </Link>
                            <Link to="/shop" className={`nav_a ${location.pathname === "/shop" ? "active" : ''} d-lg-flex d-none`}>
                                {getText('nav_3')}
                            </Link>
                            <Link to="/contact" className={`nav_a ${location.pathname === "/contact" ? "active" : ''} d-lg-flex d-none`}>
                                {getText('nav_4')}
                            </Link>
                        </div>
                        <div className="col-6 d-lg-flex d-none align-items-center justify-content-end">
                            <a href='tel:+998889030023' className="nav_l_box">
                                <img src="/img/phone.png" alt="" />
                                <div className="nav_l_box_a">
                                    +998 88 903 00 23
                                </div>
                            </a>
                            <a target={'_blank'} rel="noreferrer" href='https://maps.windows.com/?form=WNAMSH&collection=point.41.306862_69.236892_Point' className="nav_l_box_2">
                                <img src="/img/location.png" alt="" />
                                <div className="nav_l_box_a">
                                    {getText('nav_5')}
                                </div>
                            </a>
                            <div className="lang_box">
                                {getLanguage() === 'ru' ?
                                    <img src="/img/flag_1.png" alt="" /> : ''
                                }
                                {getLanguage() === 'en' ?
                                    <img src="/img/flag_2.png" alt="" /> : ''
                                }
                                {getLanguage() === 'uz' ?
                                    <img src="/img/flag_3.png" alt="" /> : ''
                                }

                                {/* <img src="/img/flag_1.png" alt="" /> */}
                                <select onChange={changeLanguage} className='lang_text' name="" id="">
                                    <option selected={getLanguage() === "uz"} value="uz">Uz</option>
                                    <option selected={getLanguage() === "ru"} value="ru">Ру</option>
                                    <option selected={getLanguage() === "en"} value="en">En</option>
                                </select>
                            </div>

                        </div>


                        <div className={`col-6 nav_a_box d-lg-none d-flex align-items-center justify-content-between ${burger ? 'active' : ''}`}>
                            <Link onClick={() => setBurger(!burger)} to="/about" className={`nav_a ${location.pathname === "/about" ? "active" : ''} `}>
                                О нас
                            </Link>
                            <Link onClick={() => setBurger(!burger)} to="/services" className={`nav_a ${location.pathname === "/services" ? "active" : ''} `}>
                                Услуги
                            </Link>
                            <Link onClick={() => setBurger(!burger)} to="/shop" className={`nav_a ${location.pathname === "/shop" ? "active" : ''} `}>
                                Продукция
                            </Link>
                            <Link onClick={() => setBurger(!burger)} to="/contact" className={`nav_a ${location.pathname === "/contact" ? "active" : ''} `}>
                                Контакты
                            </Link>
                        </div>


                        <div onClick={() => setBurger(!burger)} className={`burger pr-4 ml-auto d-flex d-lg-none ${burger ? 'burgered' : ''}`}>
                            <div className="burger_up "></div>
                            <div className="burger_down"></div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar