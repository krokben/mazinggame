export default function gameReducer(game = {}, action) {
	switch (action.type) {
		case 'SET_SCORE':
			return {
				...game,
				score: action.score
			};
		case 'SET_CURRENT':
			return {
				...game,
				current: action.current
			};
		default:
			return game;
	}
}