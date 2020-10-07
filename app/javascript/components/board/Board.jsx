import React from "react";
import lists from "../../reducers/lists";

const Board = props => {
console.log(props);
return (
  <div>
      <p>
          {props.title}
      </p>
      <div>
          {props.lists.map(list => {
              return (
                <div>
                <p>
                    {list.title}
                </p>
                    {props.cards.filter(card => {
                      return list.id === card.list_id;
                    }).map(card => {
                        return (
                            <p>
                                {card.title}
                            </p>
                        );
                    })
                    }
                </div>
              );
          })}
      </div>
  </div>
)};

export default Board;
