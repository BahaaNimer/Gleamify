import { Category } from './Category';
import { Result } from './Result';

export type AmazonProductSearchResults =
	{
		amazonProductSearchResults: {
			productResults: {
				results: {
					categories: Category[];
				}[];
			};
		};
	};

export type AmazonCategory = {
	amazonProductCategory: Category;
};

export type AmazonProducts = {
	amazonProductCategory: {
		id: string;
		name: string;
		productResults: {
			results: Result[];
		};
	};
};
