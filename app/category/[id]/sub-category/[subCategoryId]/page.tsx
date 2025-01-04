import ProductsList from '@/app/components/subCategories/productsList';
import graphQLClient from '@/app/lib/graphQL/graphQLClient';
import { subCategoryProductsQuery } from '@/app/lib/graphQL/queries';
import subCategoryProducts from '@/app/mocks/subcategoriesProducts.json'
import { isProd } from '@/app/utils/functions/isProd';
import { AmazonProducts } from '@/app/utils/types/Queries';
import { cache } from 'react';



const fetchProducts = (
	categoryId: string
) => {
	return graphQLClient.request<AmazonProducts>(
		subCategoryProductsQuery,
		{
			categoryId,
		}
	);
};

const cachedProducts = cache(
	async (categoryId: string) => {
		try {
			if (!isProd()) {
				return subCategoryProducts as AmazonProducts;
			}

			return await fetchProducts(
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
	params: Promise<{
		id: string;
		subCategoryId: string;
	}>;
}) {
	const { subCategoryId, id } =
		await params;

		const products =
			await cachedProducts(
				subCategoryId
			);

		if (!products) {
			return ':('
		}

	return (
		<ProductsList
			categoryId={id}
			products={products}
		/>
	);
}
