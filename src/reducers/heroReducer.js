export default function heroReducer(hero = {}, action) {
	switch (action.type) {
		case 'CHANGE_POSITION':
			return {
				...hero,
				position: action.position
			};
		case 'CHANGE_HERO_COLOR':
			return {
				...hero,
				color: action.color
			};
		default:
			return hero;
	}
}