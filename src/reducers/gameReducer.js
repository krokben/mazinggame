export default function gameReducer(game = {}, action) {
	switch (action.type) {
		case 'SET_SCORE':
			return {
				...game,
				score: action.score
			};
		default:
			return game;
	}
}