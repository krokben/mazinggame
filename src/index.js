import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';
import { Provider } from 'react-redux';

const initialState = {
	game: {
		current: 0,
		score: 0,
		levels: [
			{
				maxScore: 20,
				winner: '#16a085',
				colors: ['#e74c3c', '#16a085']
			},
			{
				maxScore: 12,
				winner: '#16a085',
				colors: ['#e74c3c', '#16a085']
			}
		],
	},
	hero: {
		position: 1,
		color: '#34495e'
	},
	board: [
		{position:  1, tile:  1, clickable: false},
		{position:  2, tile:  2, clickable: true},
		{position:  3, tile:  3, clickable: false},
		{position:  4, tile:  4, clickable: false},
		{position:  5, tile:  5, clickable: false},
		{position:  6, tile:  6, clickable: true},
		{position:  7, tile:  7, clickable: false},
		{position:  8, tile:  8, clickable: false},
		{position:  9, tile:  9, clickable: false},
		{position: 10, tile: 10, clickable: false},
		{position: 11, tile: 11, clickable: false},
		{position: 12, tile: 12, clickable: false},
		{position: 13, tile: 13, clickable: false},
		{position: 14, tile: 14, clickable: false},
		{position: 15, tile: 15, clickable: false},
		{position: 16, tile: 16, clickable: false},
		{position: 17, tile: 17, clickable: false},
		{position: 18, tile: 18, clickable: false},
		{position: 19, tile: 19, clickable: false},
		{position: 20, tile: 20, clickable: false},
		{position: 21, tile: 21, clickable: false},
		{position: 22, tile: 22, clickable: false},
		{position: 23, tile: 23, clickable: false},
		{position: 24, tile: 24, clickable: false},
		{position: 25, tile: 25, clickable: false}
	],
	boardConfig: {
		system: 'rows',
		rows: [1, 2, 3, 4, 5],
		columns: [1, 2, 3, 4, 5]
	},
	rows: [
		{id:  1, group: 1, position: null, color: '#ecf0f1', clickable: false},
		{id:  2, group: 1, position: null, color: '#e74c3c', clickable: false},
		{id:  3, group: 1, position: null, color: '#e74c3c', clickable: false},
		{id:  4, group: 1, position: null, color: '#e74c3c', clickable: false},
		{id:  5, group: 1, position: null, color: '#e74c3c', clickable: false},
		{id:  6, group: 2, position: null, color: '#16a085', clickable: false},
		{id:  7, group: 2, position: null, color: '#e74c3c', clickable: false},
		{id:  8, group: 2, position: null, color: '#e74c3c', clickable: false},
		{id:  9, group: 2, position: null, color: '#e74c3c', clickable: false},
		{id: 10, group: 2, position: null, color: '#e74c3c', clickable: false},
		{id: 11, group: 3, position: null, color: '#16a085', clickable: false},
		{id: 12, group: 3, position: null, color: '#16a085', clickable: false},
		{id: 13, group: 3, position: null, color: '#e74c3c', clickable: false},
		{id: 14, group: 3, position: null, color: '#16a085', clickable: false},
		{id: 15, group: 3, position: null, color: '#e74c3c', clickable: false},
		{id: 16, group: 4, position: null, color: '#16a085', clickable: false},
		{id: 17, group: 4, position: null, color: '#e74c3c', clickable: false},
		{id: 18, group: 4, position: null, color: '#e74c3c', clickable: false},
		{id: 19, group: 4, position: null, color: '#16a085', clickable: false},
		{id: 20, group: 4, position: null, color: '#16a085', clickable: false},
		{id: 21, group: 5, position: null, color: '#16a085', clickable: false},
		{id: 22, group: 5, position: null, color: '#16a085', clickable: false},
		{id: 23, group: 5, position: null, color: '#16a085', clickable: false},
		{id: 24, group: 5, position: null, color: '#16a085', clickable: false},
		{id: 25, group: 5, position: null, color: '#16a085', clickable: false},
		{id: 26, group: 6, position: null, color: '#16a085', clickable: false},
		{id: 27, group: 6, position: null, color: '#e74c3c', clickable: false},
		{id: 28, group: 6, position: null, color: '#e74c3c', clickable: false},
		{id: 29, group: 6, position: null, color: '#e74c3c', clickable: false},
		{id: 30, group: 6, position: null, color: '#e74c3c', clickable: false},
		{id: 31, group: 7, position: null, color: '#16a085', clickable: false},
		{id: 32, group: 7, position: null, color: '#e74c3c', clickable: false},
		{id: 33, group: 7, position: null, color: '#e74c3c', clickable: false},
		{id: 34, group: 7, position: null, color: '#e74c3c', clickable: false},
		{id: 35, group: 7, position: null, color: '#e74c3c', clickable: false},
		{id: 36, group: 8, position: null, color: '#16a085', clickable: false},
		{id: 37, group: 8, position: null, color: '#16a085', clickable: false},
		{id: 38, group: 8, position: null, color: '#e74c3c', clickable: false},
		{id: 39, group: 8, position: null, color: '#16a085', clickable: false},
		{id: 40, group: 8, position: null, color: '#e74c3c', clickable: false},
		{id: 41, group: 9, position: null, color: '#16a085', clickable: false},
		{id: 42, group: 9, position: null, color: '#e74c3c', clickable: false},
		{id: 43, group: 9, position: null, color: '#e74c3c', clickable: false},
		{id: 44, group: 9, position: null, color: '#16a085', clickable: false},
		{id: 45, group: 9, position: null, color: '#16a085', clickable: false},
		{id: 46, group: 10, position: null, color: '#16a085', clickable: false},
		{id: 47, group: 10, position: null, color: '#16a085', clickable: false},
		{id: 48, group: 10, position: null, color: '#16a085', clickable: false},
		{id: 49, group: 10, position: null, color: '#16a085', clickable: false},
		{id: 50, group: 10, position: null, color: '#16a085', clickable: false}
	],
	columns: []
};

const store = configureStore(initialState);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
