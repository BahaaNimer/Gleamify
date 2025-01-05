import React from 'react';
import { ProductStoreProvider } from '@/app/lib/providers/products-store-provider';
import { Footer } from './components/footer';
import { Navbar } from './components/navbar';
import './globals.css';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head>
				<title>Gleamify</title>
				<meta
					name='description'
					content='Gleamify - Your go-to platform for discovering and shopping the latest products.'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<meta
					property='og:title'
					content='Gleamify'
				/>
				<meta
					property='og:description'
					content='Gleamify - Your go-to platform for discovering and shopping the latest products.'
				/>
				<meta
					property='og:image'
					content='/public/vecteezy_online-shopping-png-with-ai-generated_29711164.png'
				/>
				<meta
					property='og:url'
					content='https://gleamify-l2ql02pfh-bahaa-nimers-projects.vercel.app/'
				/>
				<meta
					name='twitter:card'
					content='summary_large_image'
				/>
				<meta
					name='twitter:title'
					content='Gleamify'
				/>
				<meta
					name='twitter:description'
					content='Gleamify - Your go-to platform for discovering and shopping the latest products.'
				/>
				<meta
					name='twitter:image'
					content='/public/vecteezy_online-shopping-png-with-ai-generated_29711164.png'
				/>
			</head>
			<body className='px-5 flex flex-col min-h-screen bg-base-100 font-sans'>
				<Navbar />
				<main className='flex justify-center items-center my-5'>
					<ProductStoreProvider>
						{children}
					</ProductStoreProvider>
				</main>
				<Footer />
			</body>
		</html>
	);
}
