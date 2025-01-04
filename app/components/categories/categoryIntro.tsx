import React from 'react';

const CategoryIntro = ({
	subCategoryName,
	isProductList,
}: {
	subCategoryName: string;
	isProductList: boolean;
}) => {
	return (
		<div className='bg-blue-500 p-8 rounded-md shadow-md mt-8 mb-6 text-white '>
			<h2 className='text-4xl font-bold mb-4'>
				Welcome to the{' '}
				<span className=''>
					{subCategoryName}
				</span>{' '}
				{`${
					isProductList
						? ' Products'
						: ' Collection'
				}`}
			</h2>
			<p className='text-lg'>
				Explore our curated selection of
				{`${
					isProductList
						? ' Products'
						: ' Collection'
				}`}{' '}
				in the{' '}
				<span className='font-semibold'>
					{subCategoryName}
				</span>{' '}
				{`category. Whether you're looking
				for the latest trends, timeless
				classics, or unique finds, we've
				got something for everyone.
				Browse through our collection of
				high-quality`}{' '}
				{`${
					isProductList
						? ' Products'
						: ' Collection'
				}`}
				, all designed to bring you the
				best value and style.
			</p>
			<p className='mt-4 text-lg'>
				Find exactly what you need and
				enjoy shopping with ease!
			</p>
		</div>
	);
};

export default CategoryIntro;
