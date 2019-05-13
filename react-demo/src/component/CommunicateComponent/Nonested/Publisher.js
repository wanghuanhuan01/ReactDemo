import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Custom1 from './subscriber-one';
import Custom2 from './subscriber-two';
import emitter from './Evt.js';

class Publisher extends Component {

  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    //emit事件触发方法,通过事件名称找对应的事件处理函callCustom，将事件处理函数作为参数传入
    emitter.emit('callCustom', 'Hello 我来发消息了');
  }

  render() {    
    return(
      <div>
        <br/>
        <button onClick = {this.handleClick}>点击发布事件</button>
        <Custom1 />
        <Custom2 />
      </div>
    
    )  
  }
}
export default Publisher;
