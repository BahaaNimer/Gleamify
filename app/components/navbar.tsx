import React from 'react';
import Link from 'next/link';

export function Navbar() {
	return (
		<div
			data-testid='navbar'
			className='navbar bg-blue-500 text-white rounded-md shadow-md mt-4 px-6 py-4 flex items-center justify-start'>
			<Link
				href='/'
				className='text-3xl font-semibold hover:text-gray-200 transition-all duration-200'>
				Gleamify
			</Link>
		</div>
	);
}
