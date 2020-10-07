export default function lists(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_SUCCESS":
      const id = action.payload.board.id;
      let newLists = state.filter(list => list.board_id !== id);
      const newListsWithoutCards =  action.payload.board.lists.map(list => {
        const { cards, ...listWithoutCards } = list;
        return listWithoutCards;
      });
      newLists = [...newLists, ...newListsWithoutCards];
      return newLists;
    default:
      return state;
  }
}
