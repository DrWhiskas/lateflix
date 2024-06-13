import React, { useState } from 'react';
import './header.css';

import Banner from '../Banner/Banner';
import { Link } from 'react-router-dom';

interface HeaderLinks {
	to?: string;
	text?: string;
}

export default function Header() {
	const [showLinks, setShowLinks] = useState(false);
	function handleShowLinks() {
		setShowLinks(!showLinks);
	}

	function GenerateLinks({ ...props }: HeaderLinks) {
		return (
			<li className="header__list__links">
				<Link to={props.to || '#'}>{props.text}</Link>
			</li>
		);
	}

	return (
		<header className={showLinks ? 'header show-header' : 'header'}>
			<div className="header__container">
				<div className="header__container__header">
					<Link className="header__title" to="/">
						LATEFLIX
					</Link>
					<ul className="header__list">
						<GenerateLinks to="/home" text="Home" />
						<GenerateLinks to="/" text="TV Shows" />
						<GenerateLinks to="/" text="Movies" />
						<GenerateLinks to="/" text="New & Popular" />
						<GenerateLinks to="/" text="My List" />
						<GenerateLinks to="/" text="Browse by Languages" />
					</ul>
					<button className="header__burger" onClick={handleShowLinks}>
						<span className="burger-bar"></span>
					</button>
				</div>

				<Banner
					title="Stray Kids Survor Show"
					description="
                Stray Kids: Survivor, produced by JYP Entertainment, features the K-pop group Stray Kids. Members like Bang Chan, Lee Know, Changbin, Hyunjin, Han, Felix, Seungmin, I.N, and Woojin face intense physical and mental challenges to prove their endurance, resilience, and musical talent. Each episode includes diverse tasks such as live performances, creative missions, and ruthless eliminations. Participants must showcase teamwork and individual skills to survive and strive for glory in this competitive reality show.
                "
					backgroundImage="https://wallpapercave.com/wp/wp4139391.jpg"
				/>
			</div>
		</header>
	);
}
