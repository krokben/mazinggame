import React, { Component } from 'react';
import Hero from './Hero';

export default class Tile extends Component {
	componentWillMount() {
		if (this.props.boardConfig.system === 'rows') {
			this.props.rowActions.setPosition({
				id: this.props.tile.id,
				position: this.props.position
			});
			this.props.rowActions.setClickable(this.props.hero.position);
		} else {
			this.props.columnActions.setPosition({
				id: this.props.tile.id,
				position: this.props.position
			});
		}
	}

	handleClick = () => {
		// if (
		// 	this.props.tile.clickable && (this.props.tile.color ===
		// 	this.props.hero.color || this.props.hero.color === '#34495e')
		// 	) {
		// 	this.props.heroActions.changePosition(this.props.position);
		// 	this.props.heroActions.changeColor(this.props.tile.color);
		// 	// this.props.tileActions.setClickables(
		// 	// 	{
		// 	// 		boardConfig: this.props.game.boardConfig,
		// 	// 		position: this.props.position
		// 	// 	}
		// 	// );
		// 	// this.props.tileActions.setColor(
		// 	// 	{
		// 	// 		current: this.props.game.current,
		// 	// 		position: this.props.position,
		// 	// 		boardConfig: this.props.game.boardConfig
		// 	// 	}
		// 	// );
		// 	// this.props.gameActions.setScore(this.props.game.score + 1);
		// 	// if (this.props.game.score + 1 === this.props.game.levels[this.props.game.current].maxScore) {
		// 	// 	this.props.gameActions.setCurrent(this.props.game.current + 1);
		// 	// 	this.props.heroActions.changePosition(0);
		// 	// 	this.props.gameActions.setScore(0);
		// 	// }
		// }
		if (
			this.props.tile.clickable && (this.props.tile.color ===
			this.props.hero.color || this.props.hero.color === '#34495e')
			) {
			this.props.heroActions.changePosition(this.props.position);
			this.props.heroActions.changeHeroColor(this.props.tile.color);
			this.props.rowActions.setClickable(this.props.position);
			this.props.rowActions.changeTileColor({
				id: this.props.tile.id,
				color: '#ecf0f1'
			});
			this.props.gameActions.setScore(this.props.game.score + 1);
			if (this.props.game.score + 1 === this.props.game.levels[this.props.game.current].maxScore) {
				this.props.gameActions.setCurrent(this.props.game.current + 1);
				this.props.heroActions.changePosition(0);
				this.props.gameActions.setScore(0);
			}
		}
	};

	render() {
		const style = {
			backgroundColor: this.props.tile.color,
			width: '64px',
			height: '64px',
			boxSizing: 'border-box',
			float: 'left',
			border: '1px solid #000',
			cursor: this.props.tile.clickable ? 'pointer' : 'default'
		};

		return (
			<div style={style} onClick={this.handleClick}>
				{
					this.props.position ===
					this.props.hero.position &&
					<Hero hero={this.props.hero} />
				}
				{this.props.tile.position}
			</div>
		);
	}
}