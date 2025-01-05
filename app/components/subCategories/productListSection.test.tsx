import React from 'react';
import {
	render,
	screen,
} from '@testing-library/react';
import ProductListSection from './productListSection';

jest.mock('./productCard', () => ({
	ProductCard: jest.fn(() => (
		<div>ProductCard</div>
	)),
}));

describe('ProductListSection', () => {
	const mockContent = [
		{
			img: '/path/to/image1.jpg',
			name: 'Product 1',
			price: '$10',
		},
		{
			img: '/path/to/image2.jpg',
			name: 'Product 2',
			price: '$20',
		},
		{
			img: '/path/to/image3.jpg',
			name: 'Product 3',
			price: '$30',
		},
	];

	it('should render the ProductListCard for each product in the content', () => {
		render(
			<ProductListSection
				content={mockContent}
			/>
		);

		const productCards =
			screen.getAllByText(
				'ProductCard'
			);
		expect(productCards).toHaveLength(
			mockContent.length
		);
	});
});
