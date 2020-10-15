import React from "react";

const ActionsSidebar = (props) => {
  // const handleArchive = (event) => {

  // };

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
        { props.archived ? (
          <>
            <li 
              className="unarchive-button"
              onClick={props.onSubmit}
            >
              <i class="send-icon sm-icon"></i>Send to board
            </li>
            <li 
              className="red-button"
              onClick={props.onDelete}
            >
              <i class="minus-icon sm-icon"></i>Delete
            </li>
          </>
        ) : (
          <li 
            className="archive-button" 
            onClick={props.onSubmit}
          >
            <i 
              className="file-icon sm-icon "
            ></i>Archive
          </li>
        )}
      </ul>
    </>
  );
};

export default ActionsSidebar;
