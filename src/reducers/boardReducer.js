export default function boardReducer(board = [], action) {
	switch (action.type) {
		case 'SHIFT_UP':
			return board.map((x) => {
				return Object.assign({}, x, {tile: x.tile + 5})
			});
		case 'SHIFT_LEFT':
			return board.map((x) => {
				return Object.assign({}, x, {tile: x.tile + 1})
			});
		case 'SET_CLICKABLE':
			return board.map((x) => {
				return x.position === action.position + 1 ||
				x.position === action.position - 1 ||
				x.position === action.position + 5 ||
				x.position === action.position - 5 ?
					Object.assign({}, x, {clickable: true}) :
					Object.assign({}, x, {clickable: false})
			});
		default:
			return board;
	}
}