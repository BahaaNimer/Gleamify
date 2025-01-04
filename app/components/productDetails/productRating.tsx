import React from 'react';

const ProductRating = ({
	rating,
}: {
	rating?: number;
}) => {
	const maxRating = 5;
	const fullHearts = Math.floor(
		rating ?? 0
	);
	const fractionalPart =
		(rating ?? 0) - fullHearts;

	return (
		<div className='flex gap-1 m-2'>
			<div>{rating}</div>
			{[...Array(maxRating)].map(
				(_, index) => (
					<div
						key={index}
						className='relative w-6 h-6'>
						<div
							className={`mask mask-heart w-full h-full ${
								index < fullHearts
									? 'bg-red-500'
									: 'bg-inherit'
							}`}></div>

						{index === fullHearts &&
							fractionalPart > 0 && (
								<div
									className='absolute top-0 left-0 h-full bg-red-500 mask mask-heart'
									style={{
										width: `${
											fractionalPart *
											100
										}%`,
									}}></div>
							)}
					</div>
				)
			)}
		</div>
	);
};

export default ProductRating;
