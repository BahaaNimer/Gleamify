import React from 'react';
import {
	render,
	screen,
} from '@testing-library/react';
import ProductRating from './productRating';

describe('ProductRating', () => {
	it('should render hearts with the correct rating', () => {
		const mockProduct = {
			rating: 3.5,
		};

		const { container } = render(
			<ProductRating
				rating={mockProduct.rating}
			/>
		);

		const hearts =
			container.querySelectorAll(
				'div.mask-heart'
			);

		expect(hearts).toHaveLength(6);
		expect(hearts[0]).toHaveClass(
			'bg-red-500'
		);
		expect(hearts[1]).toHaveClass(
			'bg-red-500'
		);
		expect(hearts[2]).toHaveClass(
			'bg-red-500'
		);
		expect(hearts[3]).toHaveClass(
			'bg-inherit'
		);
		expect(hearts[4]).toHaveClass(
			'absolute top-0 left-0 h-full bg-red-500 mask mask-heart'
		);
	});

	it('should display "N/A" when rating is undefined', () => {
		render(
			<ProductRating
				rating={undefined}
				ratingsTotal={100}
			/>
		);

		expect(
			screen.getByText('Rating:')
		).toBeInTheDocument();
		expect(
			screen.getByText('N/A')
		).toBeInTheDocument();
	});

	it('should display 0 as the rating when rating is 0', () => {
		render(
			<ProductRating
				rating={0}
				ratingsTotal={50}
			/>
		);

		expect(
			screen.getByText('Rating:')
		).toBeInTheDocument();
		expect(
			screen.getByText('0.0')
		).toBeInTheDocument();
	});
});
