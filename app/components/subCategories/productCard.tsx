import Image from "next/image";

interface ProductCardPropsType {
	img: string;
	name: string;
	price: string;
	onClick?: () => void;
}

export function ProductCard({
	img,
	name,
	price,
	onClick,
}: ProductCardPropsType) {
	return (
		<a
			onClick={(e) => {
				e.preventDefault();
				onClick?.();
			}}
			className='card card-normal primary shadow-xl cursor-pointer'>
			<figure>
				<Image
					src={img}
					alt={name}
					width={400}
					height={400}
					className="h-full object-contain"
				/>
			</figure>
			<div className='card-body'>
				<div className='w-full break-words whitespace-normal'>
					{name}
				</div>
				<div className='justify-end'>
					<p className='btn btn-primary'>
						{price}
					</p>
				</div>
			</div>
		</a>
	);
}
