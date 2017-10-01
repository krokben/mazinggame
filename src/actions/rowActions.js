const rowActions = {
	setPositions(payload) {
		return {
			type: 'SET_POSITIONS',
			payload
		}
	},
	setPosition(payload) {
		return {
			type: 'SET_POSITION',
			payload
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