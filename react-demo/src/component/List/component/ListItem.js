import React, { Component } from 'react';
import PropTypes from 'prop-types';
class ListItem extends Component {
  static defaultProps = {
    text: '',
    checked: false
  }
  static contextTypes = {
    color: PropTypes.string
  }
  render() {
    return (
      <li style = {{background: this.context.color}}>
        <input type = "checkbox" checked = {this.props.checked} onChange = {this.props.onChange} />
        <span>{this.props.value}</span>
      </li>
    );
  }
}
export default ListItem;