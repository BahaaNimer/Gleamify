import React from 'react';
import Image from 'next/image';

const MainImage = () => {
	return (
		<div className='flex justify-center items-center'>
			<Image
				src='/vecteezy_online-shopping-png-with-ai-generated_29711164.png'
				alt='Online Shopping Illustration'
				width={900}
				height={500}
				priority={true}
			/>
		</div>
	);
};

export default MainImage;
