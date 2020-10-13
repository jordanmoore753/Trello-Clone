import React from "react";

const ActionsSidebar = () => {
  return (
    <>
      <h2>Actions</h2>
      <ul>
        <li className="move-button">
          <i className="forward-icon sm-icon"></i>Move
        </li>
        <li className="copy-button">
          <i className="card-icon sm-icon"></i>Copy
        </li>
        <li className="subscribe-button">
          <i className="sub-icon sm-icon"></i>Subscribe
          <i className="check-icon sm-icon"></i>
        </li>
        <hr />
        <li className="archive-button">
          <i className="file-icon sm-icon "></i>Archive
        </li>
      </ul>
    </>
  );
};

export default ActionsSidebar;
