export interface Review {
	id: string;
	title: string;
	imageUrls: any;
	body: string;
}

export interface ReviewsPaginated {
	reviews: Review[];
}