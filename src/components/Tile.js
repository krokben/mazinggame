import React, { Component } from 'react';
import Hero from './Hero';

export default class Tile extends Component {
	handleClick = () => {
		if (this.props.clickable && (this.props.tile.color === this.props.hero.color || this.props.hero.color === '#34495e')) {
			if (this.props.position === this.props.hero.position + 5 && this.props.board[this.props.board.length - 1].tile + 5 <= this.props.rows[this.props.rows.length - 1].id) {
				// only execute if clicking down and there are enough rows to fill the board
				this.props.boardActions.shiftUp(this.props.rows);
			} else if (this.props.position === this.props.hero.position + 1 && this.props.board[this.props.board.length - 1].tile + 1 <= this.props.rows[this.props.rows.length - 1].id) {
				// only execute if clicking right and there are enough rows to fill the board
				this.props.boardActions.shiftLeft(this.props.rows);
			} else {
				this.props.heroActions.changePosition(this.props.position);
			}
			this.props.heroActions.changeHeroColor(this.props.tile.color);
			this.props.rowActions.changeTileColor({id: this.props.tile.id, color: '#ecf0f1'});
			setTimeout(() => this.props.boardActions.setClickable(this.props.hero.position), 1);
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
			cursor: this.props.clickable ? 'pointer' : 'default'
		};

		return (
			<div style={style} onClick={this.handleClick}>
				{
					this.props.position ===
					this.props.hero.position &&
					<Hero hero={this.props.hero} />
				}
				id: {this.props.tile.id}<br />
				pos: {this.props.position}
			</div>
		);
	}
}