import React from 'react';
import {
	render,
	screen,
} from '@testing-library/react';
import CategoryIntro from './categoryIntro';

describe('CategoryIntro', () => {
	it('renders without crashing when isProductList is true', () => {
		render(
			<CategoryIntro
				subCategoryName='Electronics'
				isProductList={true}
			/>
		);

		const titleElement =
			screen.getByRole('heading', {
				name: /welcome to the electronics products/i,
			});
		expect(
			titleElement
		).toBeInTheDocument();
	});

	it('renders without crashing when isProductList is false', () => {
		render(
			<CategoryIntro
				subCategoryName='Fashion'
				isProductList={false}
			/>
		);

		const titleElement =
			screen.getByRole('heading', {
				name: /welcome to the fashion collection/i,
			});
		expect(
			titleElement
		).toBeInTheDocument();
	});
});
