import React from 'react'
import { getText } from '../locales'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    let bot = {
        TOKEN: "6261326416:AAGjnzQV3yoFFvl40wycsSEFOcssFZNrKRM",
        chatID: "-991682766"
    }
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const nav = useNavigate()
    const sendForm = (e) => {
        e.preventDefault()
        axios.get(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${'Ismi: ' + name + '%0ATelefon raqami: ' + number + ''}`)
            .then((res) => {
                setName('')
                setNumber('')
                nav('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <div className="Contact">
                <div className="contact_head">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="contact_head_name">
                                    {getText("nav_4")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact_body">
                    <div className="con_map">
                        <div className="head_map">
                            <iframe className='maps_map' src="https://yandex.ru/map-widget/v1/?um=constructor%3A1eb33b947e107fe6476fbe1fa9b00882b4fce3a34cb98cd445a5aa6f583bbe5d&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="con_body_name">
                                    {getText("contact_us")}
                                </div>
                                <form onSubmit={sendForm} action="">
                                    <div className="con_inp_box">
                                        <input value={name} onChange={e => setName(e.target.value)} placeholder={getText('name')} type="text" name="" id="" className="con_inp" />
                                    </div>
                                    <div className="con_inp_box">
                                        <input value={number} onChange={e => setNumber(e.target.value)} placeholder={getText("tel_num")} type="text" name="" id="" className="con_inp" />
                                    </div>
                                    <button className="con_btn"><div>{getText("send")}</div></button>
                                </form>
                                <div className="con_soc">
                                    <a href='tel:+998889030023' className="con_soc_box">
                                        <img src="/img/con_1.png" alt="" className="con_soc_img" />
                                        <div className="con_soc_text">
                                            <div className="con_soc_text_h">{getText("tel_num")}
                                            </div>
                                            <div className="con_soc_text_p">
                                                +998 88 903 00 23
                                            </div>
                                        </div>
                                    </a>
                                    <a target={'_blank'} rel="noreferrer" href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=info@medlow.uz' className="con_soc_box">
                                        <img src="/img/con_2.png" alt="" className="con_soc_img" />
                                        <div className="con_soc_text">
                                            <div className="con_soc_text_h">EMAIL
                                            </div>
                                            <div className="con_soc_text_p">
                                                info@medlow.uz
                                            </div>
                                        </div>
                                    </a>
                                    <a target={'_blank'} rel="noreferrer" href='https://maps.windows.com/?form=WNAMSH&collection=point.41.306862_69.236892_Point' className="con_soc_box">
                                        <img src="/img/con_3.png" alt="" className="con_soc_img" />
                                        <div className="con_soc_text">
                                            <div className="con_soc_text_h">{getText("address")}
                                            </div>
                                            <div className="con_soc_text_p">
                                                {getText("address_2")}
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 d-lg-none d-flex">
                                <iframe className='maps_map' src="https://yandex.ru/map-widget/v1/?um=constructor%3A1eb33b947e107fe6476fbe1fa9b00882b4fce3a34cb98cd445a5aa6f583bbe5d&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact