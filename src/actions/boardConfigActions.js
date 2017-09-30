const boardConfigActions = {
	setScore(score) {
		return {
			type: 'SET_SCORE',
			score
		}
	},
	setCurrent(current) {
		return {
			type: 'SET_CURRENT',
			current
		}
	}
};

export default boardConfigActions;