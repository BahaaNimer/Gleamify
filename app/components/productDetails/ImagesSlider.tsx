import { Result } from '@/app/utils/types/Result';
import Image from 'next/image';
import React from 'react';

const ImagesSlider = ({
	product,
}: {
	product: Partial<Result>;
}) => {
	return (
		<div>
			<div className='carousel rounded-box w-full'>
				{product.imageUrls?.map(
					(src, index) => {
						return (
							<div
								id={`${index}`}
								key={`${index}`}
								className='carousel-item w-full justify-center'>
								<Image
									src={src}
									className='object-contain'
									alt={'index'}
									width={300}
									height={300}
								/>
							</div>
						);
					}
				)}
			</div>

			<div className='flex w-full justify-center gap-2 py-2'>
				{product.imageUrls?.map(
					(_, index) => {
						return (
							<div
								key={index}
								className='flex justify-center gap-2 py-2'>
								<a
									href={`#${index}`}
									className='btn btn-xs bg-blue-500 text-white'>
									{index + 1}
								</a>
							</div>
						);
					}
				)}
			</div>
		</div>
	);
};

export default ImagesSlider;
