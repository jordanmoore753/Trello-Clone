import React from "react";
import { Link } from "react-router-dom";
import DescriptionForm from "./DescriptionForm.jsx";
import DetailsSection from "./DetailsSection.js";
import CommentSection from "./CommentSection.jsx";
import ActivityListContainer from "./ActivityListContainer.jsx";
import AddSidebar from "./Add.jsx";
import ActionsSidebar from "./Actions.jsx";
import HeaderContainer from "./HeaderContainer.jsx";

class Card extends React.Component {
  state = {};

  render() {
    return (
      <>
        <div id="modal-container">
          <div className="screen"></div>
          <div id="modal">
            <Link to={`/boards/${this.props.boardId}`}>
              <i className="x-icon icon close-modal"></i>
            </Link>
            <HeaderContainer list={this.props.list} card={this.props.card} />
            <section className="modal-main">
              <ul className="modal-outer-list">
                <li className="details-section">
                  <DetailsSection card={this.props.card} />
                  <DescriptionForm card={this.props.card} />
                </li>
                <li className="comment-section">
                  <CommentSection />
                </li>
                <li className="activity-section">
                  <ActivityListContainer cardId={this.props.card.id} />
                </li>
              </ul>
            </section>
            <aside className="modal-buttons">
              <AddSidebar />
              <ActionsSidebar />
              <ul className="light-list">
                <li className="not-implemented">Share and more...</li>
              </ul>
            </aside>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
