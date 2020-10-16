import React from 'react';
import LabelsContainer from './LabelsContainer';

import { getDateDetails } from '../../lib/viewHelpers';

const DetailsSection = (props) => (
  <ul className="modal-details-list">
    <li className="labels-section">
      <LabelsContainer 
        cardId={props.card.id}
      />
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
