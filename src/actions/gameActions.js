const gameActions = {
	setScore(score) {
		return {
			type: 'SET_SCORE',
			score
		}
	}
};

export default gameActions;