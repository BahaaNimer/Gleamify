import { CategoryCard } from '@/app/components/categories/categoryCard';
import subcategories from '../../mocks/tempCategory.json';
import Link from 'next/link';
import CategoryIntro from '@/app/components/categories/categoryIntro';
import Breadcrumbs from '@/app/components/breadcrumb';
import graphQLClient from '@/app/lib/graphQL/graphQLClient';
import { AmazonCategory } from '@/app/utils/types/Queries';
import { categoryPage } from '@/app/lib/graphQL/queries';
import { isProd } from '@/app/utils/functions/isProd';
import { cache } from 'react';

const fetchSupCategories = (
	categoryId: string
) => {
	return graphQLClient.request<AmazonCategory>(
		categoryPage,
		{
			categoryId,
		}
	);
};

const cachedCategories = cache(
	async (categoryId: string) => {
		try {
			if (!isProd()) {
				return subcategories as AmazonCategory;
			}

			return await fetchSupCategories(
				categoryId
			);
		} catch (e: unknown) {
			console.log(e);
		}

		return null;
	}
);

export default async function Page({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const id = (await params).id;

	const data = await cachedCategories(
		id
	);

	const subcategoryData =
		data?.amazonProductCategory
			.subcategories;
	if (
		!subcategoryData ||
		subcategoryData.length === 0
	) {
		return (
			<p>No subcategories available.</p>
		);
	}

	return (
		<div className='container'>
			<Breadcrumbs
				crumbs={[
					{ title: 'Home', url: '/' },
					{
						title:
							data.amazonProductCategory
								.name,
						url: '#',
					},
				]}
			/>

			<CategoryIntro
				subCategoryName={
					data.amazonProductCategory
						.name
				}
				isProductList={false}
			/>
			<div className='grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
				{subcategoryData.map(
					(subCategory, index) => (
						<Link
							key={index}
							className='cursor-pointer'
							href={`/category/${id}/sub-category/${subCategory.id}`}>
							<CategoryCard
								key={subCategory.id}
								description=''
								title={subCategory.name}
							/>
						</Link>
					)
				)}
			</div>
		</div>
	);
}
