export default function rowReducer(rows = [], action) {
	switch (action.type) {
		case 'SET_POSITIONS':
			let counter = 0;
			return rows.map((tile) => {
				if (tile.group === action.payload.rows[0] ||
					tile.group === action.payload.rows[1] ||
					tile.group === action.payload.rows[2] ||
					tile.group === action.payload.rows[3] ||
					tile.group === action.payload.rows[4]) {
					counter++;
					return Object.assign({}, tile, {position: counter})
				} else {
					return tile;
				}
			});
		case 'SET_POSITION':
			return rows.map((tile) => {
				return tile.id === action.payload.id ?
					Object.assign({}, tile, {position: action.payload.position}) : tile
			});
		case 'CHANGE_TILE_COLOR':
			return rows.map((tile) => {
				return tile.id === action.payload.id ?
					Object.assign({}, tile, {color: action.payload.color}) : tile
			});
		default:
			return rows;
	}
}