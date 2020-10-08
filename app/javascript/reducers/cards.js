export default function cards(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_SUCCESS":
      const id = action.payload.board.id;
      const lists = action.payload.board.lists;
      const listIds = lists.map(list => list.id);
      const oldValidCards = state.filter(card => {
        return listIds.includes(card.list_id);
      });
      const newCards =  action.payload.board.lists.map(list => {
        const { cards } = list;
        return cards;
      });
      console.log(oldValidCards);
      console.log(newCards);
      return [...oldValidCards, ...newCards].flat();
    default:
      return state;
  }
}