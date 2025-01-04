import { GraphQLClient } from 'graphql-request';

const endpoint = process.env
	.CANOPY_GRAPHQL_ENDPOINT as string;

const graphQLClient = new GraphQLClient(
	endpoint,
	{
		headers: {
			authorization: `Bearer ${process.env.CANOPY_API_KEY}`,
		},
	}
);

export default graphQLClient;
