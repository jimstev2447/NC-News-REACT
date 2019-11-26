import React, { Component } from 'react';

class ViewToggler extends Component {
  state = { isVisible: false, children: [] };

  componentDidMount() {
    const isVisible = this.props.value;
    const children = this.props.children;
    this.setState({ isVisible, children });
  }

  handleClick = event => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    const { isVisible, children } = this.state;
    return (
      <>
        <button onClick={this.handleClick}>view comments</button>
        {isVisible && children}
      </>
    );
  }
}

export default ViewToggler;
