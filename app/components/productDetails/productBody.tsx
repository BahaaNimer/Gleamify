import { Result } from '@/app/utils/types/Result';
import React from 'react';
import ProductRating from './productRating';
import Link from 'next/link';

const ProductBody = ({
	product,
}: {
	product: Partial<Result>;
}) => {
	const description =
		product.bookDescription ||
		product.optimizedDescription;

	return (
		<div className='flex flex-col'>
			<div className='ml-3'>
				<h1 className='bg-blue-500 text-lg md:text-xl lg:text-2xl font-semibold p-3 rounded-md text-white shadow-md'>
					{product.title ||
						product.subtitle}
				</h1>
				<ul className='list-disc pl-5 space-y-2 bg-gray-100 p-4 rounded-md shadow-sm mt-5'>
					{product?.featureBullets?.map(
						(bullet, index) => (
							<li
								className='py-2 text-gray-700 leading-relaxed hover:text-gray-900 transition duration-200'
								key={index}>
								{bullet}
							</li>
						)
					)}
				</ul>
				<ProductRating
					rating={product.rating}
					ratingsTotal={
						product.ratingsTotal
					}
				/>
				<Link
					href={
						product.url
							? product.url
							: ''
					}
					className='text-center btn btn-square w-auto p-2 m-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition'>
					{`${product.price?.display} ${product.price?.currency}`}
				</Link>
			</div>

			{description ? (
				<div className='mt-6 bg-gray-50 p-5 rounded-md shadow-md text-gray-800 leading-relaxed'>
					<h2 className='text-lg font-semibold text-gray-900 mb-2'>
						Description
					</h2>
					<p>{description}</p>
				</div>
			) : null}
		</div>
	);
};

export default ProductBody;
