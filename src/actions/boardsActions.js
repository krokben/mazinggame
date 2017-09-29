const boardsActions = {
	setClickables(payload) {
		return {
			type: 'SET_CLICKABLES',
			payload
		}
	},
	setColors(payload) {
		return {
			type: 'SET_COLORS',
			payload
		}
	}
};

export default boardsActions;