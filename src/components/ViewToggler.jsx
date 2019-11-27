import React, { Component } from 'react';

class ViewToggler extends Component {
  state = { isVisible: false };

  componentDidMount() {
    const isVisible = this.props.value;
    this.setState({ isVisible });
  }

  handleClick = event => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    const { isVisible } = this.state;
    return (
      <>
        <button className="ViewToggler" onClick={this.handleClick}>
          {this.props.buttonName}
        </button>
        {isVisible && this.props.children}
      </>
    );
  }
}

export default ViewToggler;
