import React from 'react';
import {
	render,
	screen,
	fireEvent,
} from '@testing-library/react';
import ProductsList from './productsList';
import { useRouter } from 'next/navigation';
import { useProductStore } from '@/app/lib/providers/products-store-provider';

jest.mock('next/navigation', () => ({
	useRouter: jest.fn(),
}));

jest.mock(
	'@/app/lib/providers/products-store-provider',
	() => ({
		useProductStore: jest.fn(),
	})
);

jest.mock(
	'@/app/components/subCategories/productCard',
	() => ({
		ProductCard: jest.fn(() => (
			<div>ProductCard</div>
		)),
	})
);

describe('ProductsList', () => {
	const mockProducts = {
		amazonProductCategory: {
			id: 'category-id',
			name: 'Electronics',
			productResults: {
				results: [
					{
						asin: '1',
						title: 'Product 1',
						mainImageUrl:
							'/path/to/image1.jpg',
						price: {
							display: '$10',
							currency: 'USD',
						},
						url: '/product/1',
					},
					{
						asin: '2',
						title: 'Product 2',
						mainImageUrl:
							'/path/to/image2.jpg',
						price: {
							display: '$20',
							currency: 'USD',
						},
						url: '/product/2',
					},
					{
						asin: '3',
						title: 'Product 3',
						mainImageUrl:
							'/path/to/image3.jpg',
						price: {
							display: '$30',
							currency: 'USD',
						},
						url: '/product/3',
					},
				],
			},
		},
	};

	const mockSetProduct = jest.fn();
	const mockRouterPush = jest.fn();

	beforeEach(() => {
		(
			useRouter as jest.Mock
		).mockReturnValue({
			push: mockRouterPush,
		});
		(
			useProductStore as jest.Mock
		).mockReturnValue({
			setProduct: mockSetProduct,
		});
	});

	it('should render the products correctly', () => {
		render(
			<ProductsList
				categoryId='123'
				products={mockProducts}
			/>
		);

		const productCards =
			screen.getAllByText(
				'ProductCard'
			);
		expect(productCards).toHaveLength(
			mockProducts.amazonProductCategory
				.productResults.results.length
		);
	});

	it('should render pagination buttons and handle page change', () => {
		render(
			<ProductsList
				categoryId='123'
				products={mockProducts}
			/>
		);

		const paginationButtons =
			screen.getAllByRole('button');
		expect(
			paginationButtons
		).toHaveLength(1);

		fireEvent.click(
			paginationButtons[0]
		);
		expect(
			mockSetProduct
		).toHaveBeenCalledTimes(0);
	});

	it('should correctly render page numbers based on the total products', () => {
		render(
			<ProductsList
				categoryId='123'
				products={mockProducts}
			/>
		);

		const paginationButtons =
			screen.getAllByRole('button');
		expect(
			paginationButtons
		).toHaveLength(1);
	});
});
