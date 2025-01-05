import React from 'react';
import {
	render,
	screen,
} from '@testing-library/react';
import { Footer } from './footer';

describe('Footer', () => {
	it('should render the footer content correctly', () => {
		render(<Footer />);

		const copyrightText =
			screen.getByText(
				/Copyright © All right reserved by Bahaa Industries Ltd/i
			);
		expect(
			copyrightText
		).toBeInTheDocument();
	});

	it('should have the correct class names for styling', () => {
		render(<Footer />);

		const footer = screen.getByRole(
			'contentinfo'
		);
		expect(footer).toHaveClass(
			'footer footer-center p-4 mt-auto bg-blue-500 text-white min-h-[4rem] mb-[0.2rem] rounded-md'
		);
	});
});
