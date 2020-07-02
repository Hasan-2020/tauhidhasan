import React from "react";
import "./Cards.css";

const cards = (props) => {
	return (
		<div className="Cards">
			<h1>{props.person} </h1>
			<h3>
				This is {props.name} and he is {props.age} years old
			</h3>
			<p>{props.children}</p>
		</div>
	);
};

export default cards;
