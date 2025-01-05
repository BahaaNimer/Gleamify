import React from 'react';
import {
	render,
	screen,
	waitFor,
} from '@testing-library/react';
import ProductDetail from './productDetail';
import { useRouter } from 'next/navigation';
import { useProductStore } from '@/app/lib/providers/products-store-provider';
import ImagesSlider from './ImagesSlider';

jest.mock('next/navigation', () => ({
	useRouter: jest.fn(),
}));

jest.mock(
	'@/app/lib/providers/products-store-provider',
	() => ({
		useProductStore: jest.fn(),
	})
);

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

describe('ProductDetail', () => {
	let pushMock: jest.Mock;

	beforeEach(() => {
		pushMock = jest.fn();
		(
			useRouter as jest.Mock
		).mockReturnValue({
			push: pushMock,
		});
	});

	it('should redirect if no product asin is provided', async () => {
		const mockProduct = {};

		(
			useProductStore as jest.Mock
		).mockReturnValue(mockProduct);

		render(<ProductDetail />);

		await waitFor(() =>
			expect(
				pushMock
			).toHaveBeenCalledWith('/')
		);

		expect(
			screen.getByText('Redirecting...')
		).toBeInTheDocument();
	});

	it('should render product details when product asin is provided', () => {
		const mockProduct = {
			asin: 'B08X1X1YJ9',
			title: 'Sample Product',
			mainImageUrl: '/sample.jpg',
			price: {
				display: '$99.99',
				currency: 'USD',
			},
		};

		(
			useProductStore as jest.Mock
		).mockReturnValue(mockProduct);

		render(<ProductDetail />);

		expect(
			screen.getByText(
				mockProduct.title
			)
		).toBeInTheDocument();
	});

	test('renders images slider', () => {
		const mockProduct = {
			imageUrls: [
				'/image1.jpg',
				'/image2.jpg',
			],
		};

		(
			useProductStore as jest.Mock
		).mockReturnValue(mockProduct);

		render(
			<ImagesSlider
				product={mockProduct}
			/>
		);

		mockProduct.imageUrls.forEach(
			(src, index) => {
				const imageElement =
					screen.getByAltText(
						`${index}`
					);
				expect(
					imageElement
				).toBeInTheDocument();
				expect(
					imageElement
				).toHaveAttribute('src', src);
			}
		);
	});
});
