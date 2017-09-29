import React, { Component } from 'react';
import Tile from './Tile';

export default class Board extends Component {
	render() {
		const style = {
			width: '320px'
		};

		return (
			<div style={style}>
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