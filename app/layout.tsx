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
			<body className='px-5 flex flex-col min-h-dvh bg-base-100 font-sans'>
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
