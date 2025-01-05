import React from 'react';
import {
	render,
	screen,
} from '@testing-library/react';
import {
	CategoryCard,
	CardProps,
} from './categoryCard';

describe('CategoryCard', () => {
	const mockProps: CardProps = {
		title: 'Sample Category',
		description:
			'This is a description of the category.',
	};

	it('renders the title and description correctly', () => {
		render(
			<CategoryCard {...mockProps} />
		);

		const titleElement =
			screen.getByText(mockProps.title);
		expect(
			titleElement
		).toBeInTheDocument();

		const descriptionElement =
			screen.getByText(
				mockProps.description
			);
		expect(
			descriptionElement
		).toBeInTheDocument();
	});

	it('check if it has the correct className', () => {
		render(
			<CategoryCard {...mockProps} />
		);

		const cardElement = screen
			.getByText(mockProps.title)
			.closest('div');

		expect(cardElement).toHaveClass(
			'card-body'
		);
	});
});
