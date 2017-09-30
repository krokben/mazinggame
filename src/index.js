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
				maxScore: 11,
				winner: '#16a085',
				colors: ['#1abc9c', '#16a085']
			},
			{
				maxScore: 12,
				winner: '#16a085',
				colors: ['#1abc9c', '#16a085']
			}
		],
	},
	hero: {
		position: 1,
		color: '#34495e'
	},
	boardConfig: {
		system: 'rows',
		rows: [1, 2, 3, 4, 5],
		columns: [1, 2, 3, 4, 5]
	},
	rows: [
		{id: 0, group: 1, position: null, color: '#ecf0f1', clickable: false},
		{id: 1, group: 1, position: null, color: '#1abc9c', clickable: false},
		{id: 2, group: 1, position: null, color: '#1abc9c', clickable: false},
		{id: 3, group: 1, position: null, color: '#1abc9c', clickable: false},
		{id: 4, group: 1, position: null, color: '#1abc9c', clickable: false},
		{id: 5, group: 2, position: null, color: '#16a085', clickable: false},
		{id: 6, group: 2, position: null, color: '#1abc9c', clickable: false},
		{id: 7, group: 2, position: null, color: '#1abc9c', clickable: false},
		{id: 8, group: 2, position: null, color: '#1abc9c', clickable: false},
		{id: 9, group: 2, position: null, color: '#1abc9c', clickable: false},
		{id: 10, group: 3, position: null, color: '#16a085', clickable: false},
		{id: 11, group: 3, position: null, color: '#16a085', clickable: false},
		{id: 12, group: 3, position: null, color: '#1abc9c', clickable: false},
		{id: 13, group: 3, position: null, color: '#16a085', clickable: false},
		{id: 14, group: 3, position: null, color: '#1abc9c', clickable: false},
		{id: 15, group: 4, position: null, color: '#16a085', clickable: false},
		{id: 16, group: 4, position: null, color: '#1abc9c', clickable: false},
		{id: 17, group: 4, position: null, color: '#1abc9c', clickable: false},
		{id: 18, group: 4, position: null, color: '#16a085', clickable: false},
		{id: 19, group: 4, position: null, color: '#16a085', clickable: false},
		{id: 20, group: 5, position: null, color: '#16a085', clickable: false},
		{id: 21, group: 5, position: null, color: '#16a085', clickable: false},
		{id: 22, group: 5, position: null, color: '#16a085', clickable: false},
		{id: 23, group: 5, position: null, color: '#16a085', clickable: false},
		{id: 24, group: 5, position: null, color: '#16a085', clickable: false},
		{id: 25, group: 6, position: null, color: '#ecf0f1', clickable: false},
		{id: 26, group: 6, position: null, color: '#1abc9c', clickable: false},
		{id: 27, group: 6, position: null, color: '#1abc9c', clickable: false},
		{id: 28, group: 6, position: null, color: '#1abc9c', clickable: false},
		{id: 29, group: 6, position: null, color: '#1abc9c', clickable: false},
		{id: 30, group: 7, position: null, color: '#16a085', clickable: false},
		{id: 31, group: 7, position: null, color: '#1abc9c', clickable: false},
		{id: 32, group: 7, position: null, color: '#1abc9c', clickable: false},
		{id: 33, group: 7, position: null, color: '#1abc9c', clickable: false},
		{id: 34, group: 7, position: null, color: '#1abc9c', clickable: false},
		{id: 35, group: 8, position: null, color: '#16a085', clickable: false},
		{id: 36, group: 8, position: null, color: '#16a085', clickable: false},
		{id: 37, group: 8, position: null, color: '#1abc9c', clickable: false},
		{id: 38, group: 8, position: null, color: '#16a085', clickable: false},
		{id: 39, group: 8, position: null, color: '#1abc9c', clickable: false},
		{id: 40, group: 9, position: null, color: '#16a085', clickable: false},
		{id: 41, group: 9, position: null, color: '#1abc9c', clickable: false},
		{id: 42, group: 9, position: null, color: '#1abc9c', clickable: false},
		{id: 43, group: 9, position: null, color: '#16a085', clickable: false},
		{id: 44, group: 9, position: null, color: '#16a085', clickable: false},
		{id: 45, group: 10, position: null, color: '#16a085', clickable: false},
		{id: 46, group: 10, position: null, color: '#16a085', clickable: false},
		{id: 47, group: 10, position: null, color: '#16a085', clickable: false},
		{id: 48, group: 10, position: null, color: '#16a085', clickable: false},
		{id: 49, group: 10, position: null, color: '#16a085', clickable: false}
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
