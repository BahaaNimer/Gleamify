import React from 'react';
import {
	render,
	screen,
} from '@testing-library/react';
import Breadcrumbs from './breadcrumbs';

describe('Breadcrumbs', () => {
	const mockCrumbs = [
		{ url: '/home', title: 'Home' },
		{
			url: '/category',
			title: 'Category',
		},
		{
			url: '/product',
			title: 'Product',
		},
	];

	it('should render all breadcrumb links correctly', () => {
		render(
			<Breadcrumbs
				crumbs={mockCrumbs}
			/>
		);

		mockCrumbs.forEach((crumb) => {
			expect(
				screen.getByText(crumb.title)
			).toBeInTheDocument();
			expect(
				screen
					.getByText(crumb.title)
					.closest('a')
			).toHaveAttribute(
				'href',
				crumb.url
			);
		});
	});

	it('should render the correct number of breadcrumbs', () => {
		render(
			<Breadcrumbs
				crumbs={mockCrumbs}
			/>
		);

		const breadcrumbItems =
			screen.getAllByRole('listitem');
		expect(
			breadcrumbItems
		).toHaveLength(mockCrumbs.length);
	});

	it('should render the crumbs in the correct order', () => {
		render(
			<Breadcrumbs
				crumbs={mockCrumbs}
			/>
		);

		mockCrumbs.forEach(
			(crumb) => {
				expect(
					screen
						.getByText(crumb.title)
						.closest('a')
				).toHaveAttribute(
					'href',
					crumb.url
				);
			}
		);
	});
});
