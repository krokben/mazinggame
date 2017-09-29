import React, { Component } from 'react';
import Hero from './Hero';

export default class Tile extends Component {
	handleClick = () => {
		if (
			this.props.tile.clickable && (this.props.tile.color ===
			this.props.hero.color || this.props.hero.color === '#34495e')
			) {
			this.props.heroActions.changePosition(this.props.tile.position);
			this.props.heroActions.changeColor(this.props.tile.color);
			this.props.boardsActions.setClickables(
				{
					current: this.props.game.current,
					position: this.props.tile.position
				}
			);
			this.props.boardsActions.setColors(
				{
					current: this.props.game.current,
					position: this.props.tile.position
				}
			);
			this.props.gameActions.setScore(this.props.game.score + 1);
		}
	};

	render() {
		const style = {
			backgroundColor: this.props.tile.color,
			width: '64px',
			height: '64px',
			boxSizing: 'border-box',
			float: 'left',
			border: '1px solid #000'
		};

		return (
			<div style={style} onClick={this.handleClick}>
				{
					this.props.tile.position ===
					this.props.hero.position &&
					<Hero hero={this.props.hero} />
				}
			</div>
		);
	}
}