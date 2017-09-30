import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import gameActions from './actions/gameActions';
import boardsActions from './actions/boardsActions';
import heroActions from './actions/heroActions';
import Board from './components/Board';

class App extends Component {
  render() {
    return (
      <div>
        <Board
          boards={this.props.boards}
          game={this.props.game}
          hero={this.props.hero}
          gameActions={this.props.gameActions}
          heroActions={this.props.heroActions}
          boardsActions={this.props.boardsActions}
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
    boardsActions: bindActionCreators(boardsActions, dispatch),
    heroActions: bindActionCreators(heroActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);