import React, { Component } from 'react';
import Tile from './Tile';

export default class Board extends Component {
	render() {
		const style = {
			width: '320px',
			margin: 'auto',
			fontFamily: 'Arial',
			textAlign: 'right'
		};

		return (
			<div style={style}>
				<div><h1>{this.props.game.score} / {this.props.game.levels[this.props.game.activeLevel].maxScore}</h1></div>
				{
					this.props.boards[this.props.game.current].map((tile, i) => {
						return (
							<Tile
								key={`tile-${i}`}
								tile={tile}
								game={this.props.game}
								hero={this.props.hero}
								gameActions={this.props.gameActions}
								heroActions={this.props.heroActions}
								boardsActions={this.props.boardsActions}
							/>
						);
					})
				}
			</div>
		);
	}
}