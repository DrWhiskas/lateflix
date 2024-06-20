import React from 'react';
import './categoryType.css';

interface CategoryTypeProps {
	name?: string;
	children?: React.ReactNode;
}

export default function CategoryType({ ...props }: CategoryTypeProps) {
	return (
		<div className="category-type">
			<h2 className="category-type__title">{props.name}</h2>
			<div className="content-cards">{props.children}</div>
		</div>
	);
}
