import { ProductCard } from './productCard';

type Product = {
	img: string;
	name: string;
	price: string;
};

type ProductListSectionPropsType = {
	content: Product[];
};

export function ProductListCard({
	img,
	name,
	price,
}: Product) {
	return (
		<ProductCard
			img={img}
			name={name}
			price={price}
		/>
	);
}

export function ProductListSection({
	content,
}: ProductListSectionPropsType) {
	return (
		<section className='mx-auto container'>
			<div className='grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2'>
				{content.map(
					(
						{ img, name, price },
						index
					) => (
						<ProductListCard
							key={index}
							img={img}
							name={name}
							price={price}
						/>
					)
				)}
			</div>
		</section>
	);
}

export default ProductListSection;
