import React from "react";
import CardTile from "../card/CardTile";

class List extends React.Component  {
  state = {
    active: false,
    fieldValue: this.props.list.title
  }

  handleTitleClick = () => {
    this.setState({
      active: true
    });
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      fieldValue: value
    })
    console.log(this.props.list.title);
  }

  handleEnterPress = (event) => {
    const keyName = event.key;
    if (!(keyName === 'Enter')) return;
    this.submitNewTitle();
  }

  handleInputBlur = () => {
    this.submitNewTitle();
  }

  submitNewTitle = () => {
    const title = this.state.fieldValue;
    this.props.onTitleUpdate(title);
    this.deactivateInput();
  }

  deactivateInput = () => {
    this.setState({
      active: false
    });
  }

  render () {
    return (
      <div className="list-wrapper">
        <div className="list-background">
          <div className="list">
              <a className="more-icon sm-icon" href=""></a>
              <div>
                {
                  this.state.active ? (
                    <input 
                      type="text" 
                      className="list-title" 
                      value={this.state.fieldValue}
                      autoFocus={true} 
                      onChange={this.handleInputChange}
                      onKeyPress={this.handleEnterPress}
                      onBlur={this.handleInputBlur}
                    />
                  ) : (
                    <p 
                      className="list-title"
                      onClick={this.handleTitleClick}
                    >
                      {this.props.list.title}
                    </p>
                  )
                }
              </div>
              <div className="add-dropdown add-top">
                  <div className="card"></div><a className="button">Add</a><i className="x-icon icon"></i>
                  <div className="add-options"><span>...</span>
                  </div>
              </div>
              <div id="cards-container" data-id="list-1-cards">
                {this.props.cards.map(card => {
                    return (
                      <CardTile card={card} key={card.id} />
                    );
                  })
                }
              </div>
              <div className="add-dropdown add-bottom">
                  <div className="card"><div className="card-info"></div><textarea name="add-card"></textarea><div className="members"></div></div>
                  <a className="button">Add</a><i className="x-icon icon"></i>
                  <div className="add-options"><span>...</span>
                  </div>
              </div>
              <div className="add-card-toggle" data-position="bottom">Add a card...</div>
          </div>
        </div>
      </div>
    );
  }
}

export default List;

