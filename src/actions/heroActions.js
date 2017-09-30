const heroActions = {
	changePosition(position) {
		return {
			type: 'CHANGE_POSITION',
			position
		}
	},
	changeHeroColor(color) {
		return {
			type: 'CHANGE_HERO_COLOR',
			color
		}
	}
};

export default heroActions;