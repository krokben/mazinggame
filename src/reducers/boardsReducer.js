export default function boardsReducer(boards = [], action) {
	switch (action.type) {
		case 'SET_CLICKABLES':
			const clickables = boards[action.payload.current].map(tile => {
				return tile.position === action.payload.position + 1 ||
					tile.position === action.payload.position - 1 ||
					tile.position === action.payload.position + 5 ||
					tile.position === action.payload.position - 5 ?
						Object.assign({}, tile, {clickable: true}) :
						Object.assign({}, tile, {clickable: false})
			});
			boards[action.payload.current] = clickables;
			return boards;
		case 'SET_COLORS':
			const colors = boards[action.payload.current].map(tile => {
				return tile.position === action.payload.position ?
						Object.assign({}, tile, {color: '#ecf0f1'}) :
						tile
			});
			boards[action.payload.current] = colors;
			return boards;
		default:
			return boards;
	}
}