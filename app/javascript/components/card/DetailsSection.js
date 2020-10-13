import React from 'react';

import { getDateDetails } from '../../lib/viewHelpers';

const DetailsSection = (props) => (
  <ul className="modal-details-list">
    <li className="labels-section">
      <h3>Labels</h3>
      { props.card.labels.map(label => {
        return (
          <div className="member-container">
            <div className={`${label} label colorblindable`}></div>
          </div>
        );
      })}
      
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
