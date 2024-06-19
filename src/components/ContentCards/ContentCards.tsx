import React from "react";
import './contentCards.css';

interface ContentCardProps{
    title: string
    description?: string
    imageUrl?: string
}

export default function ContentCard({...props}: ContentCardProps){
    return (
			<div className="content-card">
				<img
					className="content-card__image"
					src={props.imageUrl}
					alt={props.title + "'s image"}
				/>
				<div className="content-card__content">
					<h2 className="content-card__content__title">{props.title}</h2>
					<p className="content-card__content__description">{props.description}</p>
				</div>
			</div>
		);
}