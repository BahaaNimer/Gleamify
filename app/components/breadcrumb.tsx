import Link from 'next/link';
import React from 'react';

export type BreadcrumbsProps = {
	crumbs: {
		url: string;
		title: string;
	}[];
};

const Breadcrumbs = ({
	crumbs,
}: BreadcrumbsProps) => {
	return (
		<div className='breadcrumbs text-sm'>
			<ul>
				{crumbs.map((crumb, index) => (
					<li key={index}>
						<Link href={crumb.url}>
							{crumb.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Breadcrumbs;
