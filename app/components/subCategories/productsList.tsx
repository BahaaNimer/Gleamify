'use client';
import { useState } from 'react';
import subcategoriesProducts from '../../mocks/subcategoriesProducts.json';
import { ProductCard } from '@/app/components/subCategories/productCard';
import { useProductStore } from '@/app/lib/providers/products-store-provider';
import { Result } from '@/app/utils/types/Result';
import { useRouter } from 'next/navigation';
import CategoryIntro from '../categories/categoryIntro';
import Breadcrumbs from '../breadcrumb';
import { AmazonProducts } from '@/app/utils/types/Queries';

export default function ProductsList({
	categoryId,
	products,
}: {
	categoryId: string;
	products: AmazonProducts;
}) {
	const router = useRouter();

	const subCategoryProducts =
		products.amazonProductCategory
			.productResults.results;

	const { setProduct } =
		useProductStore((state) => state);

	const [currentPage, setCurrentPage] =
		useState(1);
	const itemsPerPage = 6;

	const startIndex =
		(currentPage - 1) * itemsPerPage;
	const endIndex =
		startIndex + itemsPerPage;

	const paginatedProducts =
		subCategoryProducts.slice(
			startIndex,
			endIndex
		);

	const totalPages = Math.ceil(
		subCategoryProducts.length /
			itemsPerPage
	);

	const handleProductsData = (
		data: Result
	) => {
		setProduct(data);
		router.push(
			`/product-details/${data.asin}`,
			undefined
		);
	};

	const handlePageChange = (
		page: number
	) => {
		setCurrentPage(page);
	};

	return (
		<div className='container flex flex-col justify-center'>
			<Breadcrumbs
				crumbs={[
					{ title: 'Home', url: '/' },
					{
						title: 'Categories',
						url: `/category/${categoryId}`,
					},
					{
						title:
							products
								.amazonProductCategory
								.name,
						url: '#',
					},
				]}
			/>
			<CategoryIntro
				subCategoryName='Example'
				isProductList={true}
			/>
			<div className='container grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-auto'>
				{paginatedProducts.map(
					(subCategory) => (
						<ProductCard
							key={subCategory.asin}
							name={subCategory.title}
							img={
								subCategory.mainImageUrl
							}
							price={`${subCategory.price?.display} ${subCategory.price?.currency}`}
							onClick={() =>
								handleProductsData(
									subCategory as Result
								)
							}
						/>
					)
				)}
			</div>
			<div className='flex justify-center mt-8 space-x-2'>
				{Array.from(
					{ length: totalPages },
					(_, index) => (
						<button
							key={index}
							className={`px-4 py-2 rounded ${
								currentPage ===
								index + 1
									? 'bg-blue-500 text-white'
									: 'bg-gray-200 text-black hover:bg-blue-300'
							}`}
							onClick={() =>
								handlePageChange(
									index + 1
								)
							}>
							{index + 1}
						</button>
					)
				)}
			</div>
		</div>
	);
}
