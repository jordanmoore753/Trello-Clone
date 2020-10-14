import React from "react";

class Header extends React.Component {
  state = {
    title: this.props.card.title
  }

  handleTitleChange = (event) => {
    const value = event.target.value;
    console.log(value);
    this.setState({
      title: value
    })
  }

  handleTitleSubmit = (event) => {
    if (event.key && event.key !== 'Enter') {
      return
    } else {
      console.log('Submit');
    }
  }

  render() {
    return (
      <header>
        <i className="card-icon icon .close-modal"></i>
        <textarea 
          className="list-title" 
          style={{ height: "45px" }}
          onChange={this.handleTitleChange}
          value={this.state.title}
          onBlur={this.handleTitleSubmit}
          onKeyPress={this.handleTitleSubmit}
        >
          {this.state.title}
        </textarea>
        <p>
          in list <a className="link">{this.props.list && this.props.list.title}</a>
          <i className="sub-icon sm-icon"></i>
        </p>
      </header>
    );
  }
}

export default Header;
