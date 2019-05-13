import React, { Component } from 'react';
import PropTypes from 'prop-types'

/**
 * 第三层有A（生产者）层直接传递数据到此层C（消费者）
 */
class CppComponent extends React.Component {
   //子组件需要通过一个静态属性contextTypes声明后，才可以访问父组件Context对象的属性
  static contextTypes = {
    propA: PropTypes.string
  }

  render () {
    return(
      <div>
      	<p>从生产者传递过来的属性A：{this.context.propA}</p>
      </div>
    ) 
  }
}
export default CppComponent;