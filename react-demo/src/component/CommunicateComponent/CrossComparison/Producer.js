import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CppComponent from './Customers';

class Producer extends Component {

  constructor(props){
    super(props);
  }

  //Context生产者，通过静态属性childContextTypes声明提供给子组件的Context对象的属性，
  static childContextTypes = {
    propA: PropTypes.string
  }
  
  //实例getChildContext方法，返回Context对象
  getChildContext () {
    return {
      propA: 'propA'
    }
  }

  render() {
    return <BppComponent />
  }
}

class BppComponent extends React.Component {
  render () {
    return <CppComponent />
  }
}

export default Producer;
