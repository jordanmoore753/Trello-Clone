export default function lists(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_SUCCESS":
      // extract the lists from the action payload and return that as the state
      // we left off here....
      return action.payload.board.lists;
    default:
      return state;
  }
}
