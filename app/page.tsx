import GridViewList from './components/landingPage/gridViewList';
import graphQLClient from './lib/graphQL/graphQLClient';
import categories from '@/app/mocks/tempCategories.json';
import { AmazonProductSearchResults } from './utils/types/Queries';
import { cache } from 'react';
import { searchCategoryQuery } from './lib/graphQL/queries';
import { isProd } from './utils/functions/isProd';

const fetchCategories = () => {
	return graphQLClient.request<AmazonProductSearchResults>(
		searchCategoryQuery,
		{
			keyword: 'best seller',
		}
	);
};

const cachedCategories = cache(
	async () => {
		try {
			if (!isProd()) {
				return categories as AmazonProductSearchResults;
			}

			const data =
				await fetchCategories();

			console.log(
				'returned from the query',
				data
			);

			return data;
		} catch (e: unknown) {
			console.log(e);
		}

		return null;
	}
);

export default async function Home() {
	const categories =
		await cachedCategories();

	if (!categories) {
		return 'Not Found.';
	}
	return (
		<GridViewList
			categories={categories}
		/>
	);
}
