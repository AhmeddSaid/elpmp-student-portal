"use client";
import React, { Dispatch } from "react";
// @ts-ignore
import Ratings from "react-ratings-declarative";

const Foo = ({ rating, setRating }: { rating: number; setRating: Dispatch<number> }) => {
	const changeRating = (newRating: number) => {
		setRating(newRating);
	};

	return (
		<Ratings
			rating={rating}
			widgetRatedColors="#FFB600"
			widgetHoverColors="#FFA500"
			widgetEmptyColor="#fff"
			changeRating={changeRating}
		>
			<Ratings.Widget />
			<Ratings.Widget />
			<Ratings.Widget />
			<Ratings.Widget />
			<Ratings.Widget />
		</Ratings>
	);
};

export { Foo };
