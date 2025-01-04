import React from 'react';
import Link from 'next/link';
import { CategoryCard } from '../categories/categoryCard';
import MainImage from './mainImage';
import LandingPageIntro from './landingPageIntro';
import { AmazonProductSearchResults } from '@/app/utils/types/Queries';

const GridViewList = ({
	categories,
}: {
	categories: AmazonProductSearchResults;
}) => {
	const ids = new Set();
	const uniqueCategories =
		categories.amazonProductSearchResults.productResults.results
			.map((item) => item.categories)
			.flat()
			.filter((item) =>
				Boolean(item.id)
			)
			.filter((item) => {
				if (ids.has(item.id))
					return false;
				ids.add(item.id);
				return true;
			})
			.filter(
				(item) =>
					item.subcategories?.length
			)
			.filter(
				(item) =>
					item.subcategories?.length > 0
			);

	return (
		<div className='container'>
			<MainImage />
			<LandingPageIntro />
			<div className='grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-8 mb-5'>
				{uniqueCategories.map(
					(category, index) => (
						<Link
							key={index}
							href={`/category/${category.id}`}
							className='flex-1 cursor-pointer'>
							<CategoryCard
								title={category.name}
								description={`Dive into ${
									category.subcategories
										?.length ?? 0
								} Subcategories`}
							/>
						</Link>
					)
				)}
			</div>
		</div>
	);
};

export default GridViewList;
