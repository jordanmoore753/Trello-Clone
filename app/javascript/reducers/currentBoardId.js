export default function currentBoardId(state = 0, action) {
  switch (action.type) {
    case "FETCH_CARD_SUCCESS":
      return action.payload.board_id
    default:
      return state;
  }
}