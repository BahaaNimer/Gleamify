import Image from 'next/image';

const MainImage = () => {
	return (
		<div className='flex justify-center items-center'>
			<Image
				src='/vecteezy_online-shopping-png-with-ai-generated_29711164.png' // Correct path for an image in the `public` folder
				alt='Online Shopping Illustration'
				width={900}
				height={500}
				priority
			/>
		</div>
	);
};

export default MainImage;
