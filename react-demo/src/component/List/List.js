import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from './component/ListItem';
class List extends Component {
  static defaultProps = {
    list: [],
    handleItemChange: () => {}
  };
  static childContextTypes = {
    color: PropTypes.string
  }
  getChildContext() {
    return {
      color: 'pink'
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list.map(entry => ({
        text: entry.text,
        checked: entry.checked
      }))
    }
  }
  onItemChange(entry) {
    const { list } = this.state;
    this.setState({
      list: list.map(prevEntry => ({
        text: prevEntry.text,
        checked: prevEntry.text === entry.text? !prevEntry.checked: prevEntry.checked
      }))
    });
    this.props.handleItemChange(entry);
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.list.map((entry, index) => (
              <ListItem 
              key = {`list-${index}`}
              value = {entry.text}
              checked = {entry.checked}
              onChange = {this.onItemChange.bind(this, entry)}
              />
            ))
          }
        </ul>
      </div>
    )
  }
}
export default List;