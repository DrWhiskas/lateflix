import React from "react";
import user from '../../data/user.json'
import { Link } from "react-router-dom";
import './login.css'
export default function Login(){
    return (
			<section className="login">
				<div className="login__container">
					<h1 className="login__title">Who's watching</h1>
					<ul className="login__account">
						{user.map((item, key) => (
							<Link className="login__account__user" to="/home" key={item.id}>
								<li className="login__account__user__item">
									<img
										className="login__account__user__img"
										src={item.img}
										alt={item.name + "'s picture"}
									/>
									<h3 className="login__account__user__name">{item.name}</h3>
								</li>
							</Link>
						))}
					</ul>
					<button className="login__btn">Manage Profiles</button>
				</div>
			</section>
		);
}