import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import boardConfigReducer from './boardConfigReducer';
import heroReducer from './heroReducer';
import rowReducer from './rowReducer';
import columnReducer from './columnReducer';

const rootReducer = combineReducers({
	game: gameReducer,
	boardConfig: boardConfigReducer,
	hero: heroReducer,
	rows: rowReducer,
	columns: columnReducer
});

export default rootReducer;