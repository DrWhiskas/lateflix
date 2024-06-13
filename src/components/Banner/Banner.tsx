import React from "react";
import './banner.css'

interface BannerProps{
    title?: string
    description?: string
    backgroundImage?: string
}

export default function Banner({...props}: BannerProps){
    return(
        <section className="banner">
            <div className="banner__info">
                <h1 className="banner__info__title">{props.title}</h1>
                <p className="banner__info__description">{props.description}</p>
            </div>
                <img className='banner__img' src={props.backgroundImage} alt={props.title + "'s background image"}/>
        </section>
    )
}