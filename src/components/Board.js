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

		let positionCounter = 0;

		return (
			<div style={style}>
				<div><h1>lvl {this.props.game.current + 1}</h1></div>
				<div><h1>{this.props.game.score} / {this.props.game.levels[this.props.game.current].maxScore}</h1></div>
				{
					this.props.boardConfig[this.props.boardConfig.system].map(rowcol => {
						return this.props[this.props.boardConfig.system].filter(tile => tile.group === rowcol).map((tile, i) => {
							positionCounter++;
							return (
								<Tile
									key={`tile-${i}`}
									position={positionCounter}
									tile={tile}
									game={this.props.game}
									boardConfig={this.props.boardConfig}
									hero={this.props.hero}
									gameActions={this.props.gameActions}
									heroActions={this.props.heroActions}
									rowActions={this.props.rowActions}
									columnActions={this.props.columnActions}
								/>
							);
						});
					})
				}
			</div>
		);
	}
}