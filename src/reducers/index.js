const initialState = {
	categories: [
		{
			id: 1,
			title: "Категория 1",
			active: false
		},
		{
			id: 2,
			title: "Категория 2",
			active: false
		},
		{
			id: 3,
			title: "Категория 3",
			active: false
		}
	],
	products: [
		{
			key: "1",
			name: "Товар 1",
			rowPrice: "2000",
			fullPrice: "2500",
			categoryId: 1
		},
		{
			key: "2",
			name: "Товар 2",
			rowPrice: "2200",
			fullPrice: "2700",
			categoryId: 2
		},
		{
			key: "3",
			name: "Товар 3",
			rowPrice: "2200",
			fullPrice: "2700",
			categoryId: 3
		},
		{
			key: "4",
			name: "Товар 4",
			rowPrice: "2200",
			fullPrice: "2700",
			categoryId: null
		}
	],
	nextCategoryId: 5
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "CATEGORIES_LOADED":
			return {
				categories: action.payload
			};

		case "PRODUCTS_LOADED":
			return {
				products: action.payload
			};

		case "CATEGORY_ADD":
			console.log(state.nextCategoryId);
			return {
				...state,
				categories: [
					...state.categories,
					{
						id: state.nextCategoryId,
						title: action.payload,
						active: false
					}
				],
				nextCategoryId: state.nextCategoryId+1
			};
		//console.log('category added (reducer):', action.payload);

		default:
			return state;
	}
};

export default reducer;
