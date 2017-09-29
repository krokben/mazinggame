import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import boardsReducer from './boardsReducer';
import heroReducer from './heroReducer';

const rootReducer = combineReducers({
	game: gameReducer,
	boards: boardsReducer,
	hero: heroReducer
});

export default rootReducer;