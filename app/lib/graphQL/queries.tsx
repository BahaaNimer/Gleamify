import { gql } from 'graphql-request';

export const subCategoryProductsQuery = gql`
	query SubCategoryProducts(
		$categoryId: String!
	) {
		amazonProductCategory(
			input: { categoryId: $categoryId }
		) {
			productResults(
				input: { page: 1 }
			) {
				results {
					title
					subtitle
					imageUrls
					featureBullets
					price {
						currency
						display
					}
					url
					asin
					rating
					mainImageUrl
					bookDescription
					optimizedDescription
					ratingsTotal
				}
			}
		}
	}
`;
export const categoryPage = gql`
	query CategoryPage(
		$categoryId: String!
	) {
		amazonProductCategory(
			input: { categoryId: $categoryId }
		) {
			id
			name
			subcategories {
				id
				name
			}
		}
	}
`;
export const searchCategoryQuery = gql`
	query Home($keyword: String!) {
		amazonProductSearchResults(
			input: { searchTerm: $keyword }
		) {
			productResults(
				input: { page: 1 }
			) {
				results {
					categories {
						name
						id
						subcategories {
							name
							id
						}
					}
				}
			}
		}
	}
`;
