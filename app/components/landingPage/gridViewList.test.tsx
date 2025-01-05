import React from 'react';
import {
	render,
	screen,
} from '@testing-library/react';
import GridViewList from './gridViewList';
import { AmazonProductSearchResults } from '@/app/utils/types/Queries';

jest.mock(
	'../categories/categoryCard',
	() => ({
		CategoryCard: ({
			title,
			description,
		}: {
			title: string;
			description: string;
		}) => (
			<div>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
		),
	})
);

jest.mock('./mainImage', () => {
	const MainImage = () => (
		<div>Main Image</div>
	);
	MainImage.displayName = 'MainImage';
	return MainImage;
});

jest.mock('./landingPageIntro', () => {
	const LandingPageIntro = () => (
		<div>Landing Page Intro</div>
	);
	LandingPageIntro.displayName =
		'LandingPageIntro';
	return LandingPageIntro;
});

describe('GridViewList', () => {
	const mockCategories: AmazonProductSearchResults =
		{
			amazonProductSearchResults: {
				productResults: {
					results: [
						{
							categories: [
								{
									id: '1',
									name: 'Electronics',
									subcategories: [
										{
											id: 'sub1',
											name: 'Mobile Phones',
										},
									],
								},
							],
						},
						{
							categories: [
								{
									id: '2',
									name: 'Fashion',
									subcategories: [
										{
											id: 'sub2',
											name: "Men's Wear",
										},
									],
								},
							],
						},
					],
				},
			},
		};

	it('renders without crashing and displays the category cards', () => {
		render(
			<GridViewList
				categories={mockCategories}
			/>
		);

		expect(
			screen.getByText('Main Image')
		).toBeInTheDocument();
		expect(
			screen.getByText(
				'Landing Page Intro'
			)
		).toBeInTheDocument();

		expect(
			screen.getByText('Electronics')
		).toBeInTheDocument();

		expect(
			screen.getByText('Fashion')
		).toBeInTheDocument();
	});

	it('renders the correct number of CategoryCards based on unique categories', () => {
		render(
			<GridViewList
				categories={mockCategories}
			/>
		);

		const categoryCards =
			screen.getAllByText(
				/Dive into \d+ Subcategories/i
			);
		expect(categoryCards.length).toBe(
			2
		);
	});
});
