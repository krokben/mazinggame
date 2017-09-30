export default function boardConfigReducer(boardConfig = {}, action) {
	switch (action.type) {
		case 'SET_POSITION':
			return {
				...boardConfig,
				position: action.position
			};
		default:
			return boardConfig;
	}
}