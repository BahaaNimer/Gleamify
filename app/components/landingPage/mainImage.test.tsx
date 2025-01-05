import React from 'react';
import {
	render,
	screen,
} from '@testing-library/react';
import MainImage from './mainImage';

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

describe('MainImage', () => {
	it('renders the image correctly', () => {
		render(<MainImage />);

		const imageElement =
			screen.getByAltText(
				'Online Shopping Illustration'
			);
		expect(
			imageElement
		).toBeInTheDocument();

		expect(
			imageElement
		).toHaveAttribute(
			'src',
			'/vecteezy_online-shopping-png-with-ai-generated_29711164.png'
		);

		expect(
			imageElement
		).toHaveAttribute('width', '900');
		expect(
			imageElement
		).toHaveAttribute('height', '500');
	});
});
