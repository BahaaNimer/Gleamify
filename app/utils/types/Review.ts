export interface Review {
	id: string;
	title: string;
	imageUrls: string[];
	body: string;
}

export interface ReviewsPaginated {
	reviews: Review[];
}