const initialState = {
	categories: [
		{
			id: 1,
			title: 'Категория 1',
			active: false
		},
		{
			id: 2,
			title: 'Категория 2',
			active: false
		},
		{
			id: 3,
			title: 'Категория 3',
			active: false
		}
	]
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "CATEGORIES_LOADED":
			return {
				categories: action.payload
			};

		default:
			return state;
	}
};

export default reducer;