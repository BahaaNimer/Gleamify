import React from 'react';
import {
	render,
	screen,
} from '@testing-library/react';
import LandingPageIntro from './landingPageIntro';

describe('LandingPageIntro', () => {
	it('renders correctly', () => {
		render(<LandingPageIntro />);

		expect(
			screen.getByText(
				'Welcome to Gleamify'
			)
		).toBeInTheDocument();

		expect(
			screen.getByText(
				/Your one-stop destination for a wide range of high-quality products/i
			)
		).toBeInTheDocument();

		expect(
			screen.getByText(
				/Explore our carefully curated selection, enjoy fast shipping/i
			)
		).toBeInTheDocument();

		expect(
			screen.getByText(
				/Start shopping today and find exactly what you need/i
			)
		).toBeInTheDocument();
	});
});
