import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function updateListSuccess({ id, title }) {
  return {
    type: types.EDIT_LIST_TITLE,
    payload: {
      id,
      title
    }
  }
}

export function fetchBoardsRequest() {
  return { type: types.FETCH_BOARDS_REQUEST };
}

export function fetchBoardSuccess(board) {
  return { type: types.FETCH_BOARD_SUCCESS, payload: { board } };
}

export function fetchBoardsSuccess(boards) {
  return { type: types.FETCH_BOARDS_SUCCESS, boards };
}

export function createBoardRequest() {
  return { type: types.CREATE_BOARD_REQUEST };
}

export function createBoardSuccess(board) {
  return { type: types.CREATE_BOARD_SUCCESS, board: board };
}

export function createListSuccess(list) {
  const { board_id, title } = list;

  return {
    type: types.ADD_LIST,
    payload: {
      board_id,
      title
    }
  }
}

export function fetchBoards() {
  return function(dispatch) {
    dispatch(fetchBoardsRequest());
    apiClient.getBoards(boards => dispatch(fetchBoardsSuccess(boards)));
  };
}

export function fetchBoard(id) {
  return function(dispatch) {
    apiClient.getBoard(id, board => dispatch(fetchBoardSuccess(board)));
  }
}

export function createBoard(board, callback) {
  return function(dispatch) {
    dispatch(createBoardRequest());
    apiClient.createBoard(board, newBoard => {
      dispatch(createBoardSuccess(newBoard));

      if (callback) {
        callback(newBoard);
      }
    });
  };
}

export function createList(board_id, title, callback) {
  return function(dispatch) {
    apiClient.createList(board_id, title, newList => {
      dispatch(createListSuccess(newList));

      if (callback) {
        callback(newList);
      }
    })
  }
}

export function updateList(list_id, title, callback) {
  return function(dispatch) {
    apiClient.updateList(list_id, title, newList => {
      dispatch(updateListSuccess(newList));

      if (callback) {
        callback(newList);
      }
    })
  }
}
