import { Result } from '@/app/utils/types/Result';
import React from 'react';
import ProductRating from './productRating';
import Link from 'next/link';

const ProductBody = ({
	product,
}: {
	product: Partial<Result>;
}) => {
	return (
		<>
			<div className='ml-3'>
				<h1 className='bg-blue-500 p-2 rounded-md	text-white'>
					{product.title ||
						product.subtitle}
				</h1>
				<p>
					{product.bookDescription ||
						product.optimizedDescription}
				</p>
				<ul className='list-[upper-roman] m-5'>
					{product?.featureBullets?.map(
						(bullet, index) => (
							<li
								className='py-2'
								key={index}>
								{bullet}
							</li>
						)
					)}
				</ul>
				<ProductRating
					rating={product.rating}
				/>
				<Link
					href={
						product.url
							? product.url
							: ''
					}
					className='btn btn-square w-auto p-2 bg-blue-500 m-2 text-white'>{`${product.price?.display} ${product.price?.currency}`}</Link>
			</div>
			<div>
				<p>
					{product.bookDescription ||
						product.optimizedDescription}
				</p>
			</div>
		</>
	);
};

export default ProductBody;
