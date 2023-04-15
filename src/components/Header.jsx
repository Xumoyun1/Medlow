import React from 'react'

const Header = () => {
    return (
        <>
            <div className="Header">
                <video className='header_video' muted loop autoPlay>
                    <source src='/video/header.mp4' type="video/mp4" />
                </video>
            </div>
        </>
    )
}

export default Header