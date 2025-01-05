import React from 'react';
import {
	render,
	screen,
} from '@testing-library/react';
import ProductBody from './productBody';
import { Result } from '@/app/utils/types/Result';

jest.mock('./productRating', () => {
	const ProductRatingMock = ({
		rating,
		ratingsTotal,
	}: {
		rating?: number;
		ratingsTotal?: number;
	}) => (
		<div>{`Rating: ${rating}, Total Ratings: ${ratingsTotal}`}</div>
	);

	ProductRatingMock.displayName =
		'ProductRatingMock';
	return ProductRatingMock;
});

describe('ProductBody', () => {
	const mockProduct: Result = {
		title: 'Sample Product Title',
		optimizedDescription:
			'This is a sample optimized description for the product.',
		price: {
			display: '$19.99',
			currency: 'USD',
		},
		url: 'https://example.com/product',
		asin: 'B01N1SE4R9',
		rating: 4.5,
		mainImageUrl:
			'https://example.com/image.jpg',
		subtitle: 'Sample Product Subtitle',
		bookDescription:
			'This is a sample description for the product.',
		imageUrls: [
			'https://example.com/image1.jpg',
			'https://example.com/image2.jpg',
		],
		featureBullets: [
			'Feature 1',
			'Feature 2',
			'Feature 3',
		],
		ratingsTotal: 100,
	};

	it('renders the product title, feature bullets, rating, and price', () => {
		render(
			<ProductBody
				product={mockProduct}
			/>
		);

		const titleElement =
			screen.getByText(
				mockProduct.title ||
					mockProduct.subtitle ||
					'No title provided'
			);
		expect(
			titleElement
		).toBeInTheDocument();

		mockProduct.featureBullets?.forEach(
			(bullet) => {
				expect(
					screen.getByText(bullet)
				).toBeInTheDocument();
			}
		);

		const ratingElement =
			screen.getByText(
				`Rating: ${mockProduct.rating}, Total Ratings: ${mockProduct.ratingsTotal}`
			);
		expect(
			ratingElement
		).toBeInTheDocument();

		const priceElement =
			screen.getByText(
				`${mockProduct.price?.display} ${mockProduct.price?.currency}`
			);
		expect(
			priceElement
		).toBeInTheDocument();
	});

	it('renders the product description if available', () => {
		render(
			<ProductBody
				product={mockProduct}
			/>
		);

		const descriptionElement =
			screen.getByText(
				mockProduct.bookDescription ||
					'No description provided'
			);
		expect(
			descriptionElement
		).toBeInTheDocument();
	});
});
