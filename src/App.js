import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import gameActions from './actions/gameActions';
import boardConfigActions from './actions/boardConfigActions';
import heroActions from './actions/heroActions';
import rowActions from './actions/rowActions';
import columnActions from './actions/columnActions';
import Board from './components/Board';

class App extends Component {
	render() {
		return (
			<div>
				<Board
					boards={this.props.boards}
					tiles={this.props.tiles}
					game={this.props.game}
					boardConfig={this.props.boardConfig}
					rows={this.props.rows}
					columns={this.props.columns}
					hero={this.props.hero}
					gameActions={this.props.gameActions}
					heroActions={this.props.heroActions}
					rowActions={this.props.rowActions}
					columnActions={this.props.columnActions}
				/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return state;
}

function mapDispatchToProps(dispatch) {
	return {
		gameActions: bindActionCreators(gameActions, dispatch),
		boardConfigActions: bindActionCreators(boardConfigActions, dispatch),
		heroActions: bindActionCreators(heroActions, dispatch),
		rowActions: bindActionCreators(rowActions, dispatch),
		columnActions: bindActionCreators(columnActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);