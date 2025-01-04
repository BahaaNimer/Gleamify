import { Category } from './Category';
import { Price } from './Price';
import { RatingsBreakdown } from './RatingsBreakdown';
import { ReviewsPaginated } from './Review';

export interface Result {
	title: string;
	optimizedDescription: any;
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
}
