import React from "react";

const Header = props => {
  return (
    <header>
      <i className="card-icon icon .close-modal"></i>
      <textarea className="list-title" style={{ height: "45px" }}>
        {props.card.title}
      </textarea>
      <p>
        in list <a className="link">{props.list && props.list.title}</a>
        <i className="sub-icon sm-icon"></i>
      </p>
    </header>
  );
};

export default Header;
