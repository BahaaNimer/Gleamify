import React from 'react';
import Image from 'next/image';
import { Result } from '@/app/utils/types/Result';
import Link from 'next/link';

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
									className='h-auto object-contain'
									alt={`${index}`}
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
								<Link
									href={`#${index}`}
									className='btn btn-xs bg-blue-500 text-white rounded-md'>
									{index + 1}
								</Link>
							</div>
						);
					}
				)}
			</div>
		</div>
	);
};

export default ImagesSlider;
