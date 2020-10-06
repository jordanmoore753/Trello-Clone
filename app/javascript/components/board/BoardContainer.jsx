import React from "react";
import { connect } from "react-redux";
import Board from "./Board";

const mapStateToProps = (state, ownProps) => {
  const title = state.boards
    .find(board => board.id == ownProps.match.params.id)
    .title;

  return {
    id: ownProps.match.params.id,
    title,
    lists: state.lists
  };
};

const mapDispatchToProps = dispatch => {
};

class BoardContainer {
  componentDidMount() {
    if (!this.props.lists[this.props.id]) {
      // fetch and dispatch
    }
  }

  render() {
    return (
      <Board
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardContainer);
