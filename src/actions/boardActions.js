const boardActions = {
	shiftUp(rows) {
		return {
			type: 'SHIFT_UP',
			rows
		}
	},
	shiftLeft(rows) {
		return {
			type: 'SHIFT_LEFT',
			rows
		}
	},
	setClickable(position) {
		return {
			type: 'SET_CLICKABLE',
			position
		}
	}
};

export default boardActions;