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
				<div><h1>lvl {this.props.game.current + 1}</h1></div>
				<div><h1>{this.props.game.score} / {this.props.game.levels[this.props.game.current].maxScore}</h1></div>
				{
					this.props.board.map((x, i) => {
						return (
							<Tile
								key={`tile-${i}`}
								position={x.position}
								clickable={x.clickable}
								tile={this.props.rows[x.tile - 1]}
								rows={this.props.rows}
								game={this.props.game}
								board={this.props.board}
								boardConfig={this.props.boardConfig}
								hero={this.props.hero}
								gameActions={this.props.gameActions}
								boardActions={this.props.boardActions}
								heroActions={this.props.heroActions}
								rowActions={this.props.rowActions}
								columnActions={this.props.columnActions}
								boardConfigActions={this.props.boardConfigActions}
							/>
						);
					})
				}
			</div>
		);
	}
}