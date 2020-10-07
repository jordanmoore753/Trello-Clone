import React from "react";
import BoardHeader from "./BoardHeader";
import List from "../list/List"

const Board = ({ title, lists, cards }) => {
  return (
    <div>
        <BoardHeader title={title} />
        {lists.map(list => {
          let ownCards = cards.filter(card => {
            return card.list_id === list.id;
          });
          return (
            <List list={list} cards={ownCards} key={list.id} />
          );
        })}
    </div>
  );
};

export default Board;
