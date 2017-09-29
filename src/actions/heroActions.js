const heroActions = {
	changePosition(position) {
		return {
			type: 'CHANGE_POSITION',
			position
		}
	},
	changeColor(color) {
		return {
			type: 'CHANGE_COLOR',
			color
		}
	}
};

export default heroActions;