import React from 'react';
import {
	render,
	screen,
	fireEvent,
} from '@testing-library/react';
import { ProductCard } from './productCard';

jest.mock('next/image', () => {
	const NextImage = (
		props: React.ComponentProps<'img'>
	) => {
		const { src, alt, ...rest } = props;
		return (
			<img
				src={src}
				alt={alt || ''}
				{...rest}
			/>
		);
	};
	NextImage.displayName = 'NextImage';
	return NextImage;
});

describe('ProductCard', () => {
	const mockOnClick = jest.fn();
	const productData = {
		img: '/path/to/image.jpg',
		name: 'Sample Product',
		price: '$100',
	};

	it('should render product image, name, and price correctly', () => {
		render(
			<ProductCard {...productData} />
		);

		const image = screen.getByAltText(
			productData.name
		);
		expect(image).toBeInTheDocument();
		expect(image).toHaveAttribute(
			'src',
			productData.img
		);

		expect(
			screen.getByText(productData.name)
		).toBeInTheDocument();

		expect(
			screen.getByText(
				productData.price
			)
		).toBeInTheDocument();
	});

	it('should call onClick when the card is clicked', () => {
		render(
			<ProductCard
				{...productData}
				onClick={mockOnClick}
			/>
		);

		const card = screen.getByText(
			productData.name
		);
		fireEvent.click(card);

		expect(
			mockOnClick
		).toHaveBeenCalledTimes(1);
	});
});
