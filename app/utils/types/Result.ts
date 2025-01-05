import { Price } from './Price';

export interface Result {
	title: string;
	optimizedDescription?: string | null;
	price?: Price;
	url: string;
	asin: string;
	rating?: number;
	mainImageUrl: string;
	subtitle?: string;
	bookDescription?: string | null;
	imageUrls?: string[];
	featureBullets?: string[];
	gtin?: string;
	ratingsTotal?: number;
}
