import React from 'react';
import {
	render,
	screen,
} from '@testing-library/react';
import ImagesSlider from './ImagesSlider';

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

describe('ImagesSlider', () => {
	const mockProduct = {
		imageUrls: [
			'/images/image1.jpg',
			'/images/image2.jpg',
			'/images/image3.jpg',
		],
	};

	it('renders the ImagesSlider component correctly', () => {
		render(
			<ImagesSlider
				product={mockProduct}
			/>
		);

		const carouselItems =
			screen.getAllByRole('img');
		expect(carouselItems.length).toBe(
			mockProduct.imageUrls.length
		);

		const navigationButtons =
			screen.getAllByRole('link');
		expect(
			navigationButtons.length
		).toBe(
			mockProduct.imageUrls.length
		);
	});
});
