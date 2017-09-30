export default function rowReducer(rows = [], action) {
	switch (action.type) {
		case 'SET_POSITION':
			return rows.map((tile) => {
				return tile.id === action.payload.id ?
					Object.assign({}, tile, {position: action.payload.position}) : tile
			});
		case 'SET_CLICKABLE':
			return rows.map((tile) => {
				return tile.position === action.position + 1 ||
				tile.position === action.position - 1 ||
				tile.position === action.position + 5 ||
				tile.position === action.position - 5 ?
					Object.assign({}, tile, {clickable: true}) :
					Object.assign({}, tile, {clickable: false})
			});
		case 'CHANGE_TILE_COLOR':
		console.log(action)
			return rows.map((tile) => {
				return tile.id === action.payload.id ?
					Object.assign({}, tile, {color: action.payload.color}) : tile
			});
		default:
			return rows;
	}
}