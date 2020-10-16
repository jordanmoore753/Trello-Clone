export default function cards(state = [], action) {
  switch (action.type) {
    case 'FETCH_BOARD_SUCCESS':
      const id = action.payload.board.id;
      const lists = action.payload.board.lists;
      const listIds = lists.map((list) => list.id);
      const oldValidCards = state.filter((card) => {
        return !listIds.includes(card.list_id);
      });

      const newCards = action.payload.board.lists.map((list) => {
        const { cards } = list;
        return cards.map((card) => {
          const { board_id, ...cardWithoutBoardId } = card;
          return cardWithoutBoardId;
        });
      });

      return [...oldValidCards, ...newCards].flat();
    case 'CREATE_CARD_SUCCESS':
      const card = action.payload.card;
      return state.concat(card);
    case 'FETCH_CARD_SUCCESS':
      let cards = state.filter((card) => card.id !== action.payload.id);
      let { board_id, ...cardWithoutBoardId } = action.payload;
      return cards.concat(cardWithoutBoardId);
    case 'CREATE_COMMENT_SUCCESS':
      let comment = action.payload.comment;
    // STRIP STUFF FROM COMMENT
    // FIND CARD
    // ADD TO CARD
    // RETURN STATE
    default:
      return state;
  }
}
