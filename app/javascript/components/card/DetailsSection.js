import React from 'react';

import { getDateDetails } from '../../lib/viewHelpers';

const DetailsSection = (props) => (
  <ul className="modal-details-list">
    <li className="labels-section">
      <h3>Labels</h3>
      <div className="member-container">
        <div className="green label colorblindable"></div>
      </div>
      <div className="member-container">
        <div className="yellow label colorblindable"></div>
      </div>
      <div className="member-container">
        <div className="orange label colorblindable"></div>
      </div>
      <div className="member-container">
        <div className="blue label colorblindable"></div>
      </div>
      <div className="member-container">
        <div className="purple label colorblindable"></div>
      </div>
      <div className="member-container">
        <div className="red label colorblindable"></div>
      </div>
      <div className="member-container">
        <i className="plus-icon sm-icon"></i>
      </div>
    </li>
    <li className="due-date-section">
      <h3>Due Date</h3>
      <div id="dueDateDisplay" className={getDateDetails(props.card).className}>
        <input
          id="dueDateCheckbox"
          type="checkbox"
          className="checkbox"
          checked=""
        ></input>
        {props.card.due_date
          ? getDateDetails(props.card).formattedDueDate
          : 'N/A'}
        <span>{getDateDetails(props.card).isOverdue && ' (past due)'}</span>
      </div>
    </li>
  </ul>
);

export default DetailsSection;
