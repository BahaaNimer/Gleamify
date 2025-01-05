import React from 'react';
import {
	render,
	screen,
} from '@testing-library/react';
import { Navbar } from './navbar';

describe('Navbar', () => {
	it('should render the Navbar with the correct brand name', () => {
		render(<Navbar />);

		const brandLink = screen.getByRole(
			'link',
			{ name: /gleamify/i }
		);
		expect(
			brandLink
		).toBeInTheDocument();
		expect(brandLink).toHaveAttribute(
			'href',
			'/'
		);
	});

	it('should have the correct class names for styling', () => {
		render(<Navbar />);

		const navbar =
			screen.getByTestId('navbar');
		expect(navbar).toHaveClass(
			'navbar bg-blue-500 text-white rounded-md shadow-md mt-4 px-6 py-4 flex items-center justify-start'
		);
	});
});
