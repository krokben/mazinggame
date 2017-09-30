export default function columnReducer(columns = [], action) {
	switch (action.type) {
		case 'SET_POSITION':
			return {
				...columns,
				position: action.position
			};
		default:
			return columns;
	}
}