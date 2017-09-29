import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';
import { Provider } from 'react-redux';

const initialState = {
	game: {
		current: 0,
		score: 0
	},
	boards: [
		[
			{position: 0, color: '#ecf0f1', clickable: false},
			{position: 1, color: '#1abc9c', clickable: true},
			{position: 2, color: '#1abc9c', clickable: false},
			{position: 3, color: '#1abc9c', clickable: false},
			{position: 4, color: '#1abc9c', clickable: false},
			{position: 5, color: '#16a085', clickable: true},
			{position: 6, color: '#1abc9c', clickable: false},
			{position: 7, color: '#1abc9c', clickable: false},
			{position: 8, color: '#1abc9c', clickable: false},
			{position: 9, color: '#1abc9c', clickable: false},
			{position: 10, color: '#16a085', clickable: false},
			{position: 11, color: '#16a085', clickable: false},
			{position: 12, color: '#1abc9c', clickable: false},
			{position: 13, color: '#16a085', clickable: false},
			{position: 14, color: '#1abc9c', clickable: false},
			{position: 15, color: '#16a085', clickable: false},
			{position: 16, color: '#1abc9c', clickable: false},
			{position: 17, color: '#1abc9c', clickable: false},
			{position: 18, color: '#16a085', clickable: false},
			{position: 19, color: '#16a085', clickable: false},
			{position: 20, color: '#16a085', clickable: false},
			{position: 21, color: '#16a085', clickable: false},
			{position: 22, color: '#16a085', clickable: false},
			{position: 23, color: '#16a085', clickable: false},
			{position: 24, color: '#16a085', clickable: false}
		]
	],
	hero: {
		position: 0,
		color: '#34495e'
	}
};

const store = configureStore(initialState);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
