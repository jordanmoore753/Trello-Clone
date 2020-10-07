import React from "react";
import * as actions from "../../actions/BoardActions"
import { connect } from "react-redux";
import Board from "./Board";

const mapStateToProps = (state, ownProps) => {
  const title = state.boards
    .find(board => board.id == ownProps.match.params.id)
    .title;

  return {
    id: ownProps.match.params.id,
    title,
    lists: state.lists,
    cards: state.cards,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchBoard: (id) => {
      dispatch(actions.fetchBoard(id));
    }
  };
};

class BoardContainer extends React.Component {
  componentDidMount() {
    this.props.onFetchBoard(this.props.id);
  }

  render() {
    return (
      <Board
        title={ this.props.title }
        lists={ this.props.lists }
        id={ this.props.id }
        cards={ this.props.cards }
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardContainer);
