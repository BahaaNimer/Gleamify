export type CardProps = {
	title: string;
	description: string;
};

export function CategoryCard({
	title,
	description,
}: CardProps) {
	return (
		<div
			className={`card bg-gradient-to-r from-blue-500/80 to-green-400/60 text-white p-6 rounded-lg shadow-xl h-52`}>
			<div className='card-body'>
				<h2 className='card-title'>
					{title}
				</h2>
				<p>{description}</p>
			</div>
		</div>
	);
}
