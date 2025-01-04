import React from 'react';
import { useRouter } from 'next/navigation';
import { useProductStore } from '@/app/lib/providers/products-store-provider';
import ImagesSlider from './ImagesSlider';
import ProductBody from './productBody';

const ProductDetail = () => {
	const router = useRouter();

	const product = useProductStore(
		(state) => state.product
	);

	console.log();

	if (!('asin' in product)) {
		router.push('/');
		return;
	}

	return (
		<section className='flex rounded-md	bg-gray-100 p-2 md:flex-row flex-col'>
			<ImagesSlider product={product} />
			<ProductBody product={product} />
		</section>
	);
};

export default ProductDetail;
