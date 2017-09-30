const rowActions = {
	setPosition(payload) {
		return {
			type: 'SET_POSITION',
			payload
		}
	},
	setClickable(position) {
		return {
			type: 'SET_CLICKABLE',
			position
		}
	},
	changeTileColor(payload) {
		return {
			type: 'CHANGE_TILE_COLOR',
			payload
		}
	}
};

export default rowActions;