import { Result } from '@/app/utils/types/Result';
import { createStore } from 'zustand/vanilla';

export type ProductState = {
	product: Partial<Result>;
};

export type ProductActions = {
	setProduct: (product: Result) => void;
};

export type ProductsStore =
	ProductState & ProductActions;

export const defaultInitState: ProductState =
	{
		product: {},
	};

export const createProductStore = (
	initState: ProductState = defaultInitState
) => {
	return createStore<ProductsStore>(
		(set) => ({
			...initState,
			setProduct: (product: Result) => {
				console.log(product);
				set((statue) => ({
					...statue,
					product: { ...product },
				}));
			},
		})
	);
};
