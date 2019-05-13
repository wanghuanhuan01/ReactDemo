import React,{ Component } from 'react';
import ReverseInherit1 from '../reverseExtend/reverseHigherComponent';
class ReverseInput extends Component{
  constructor(props){
      super(props);
      this.state = {
          value:''
      }
  }
  // 点击提交按钮
  toSubmit = () => {}
  // 监听输入框变化
  valueChange = (eve) => {}

  render(){
      const { value } = this.state;
      return (
          <div>
              <input onChange={this.valueChange} value={value}/>
              <button onClick={this.toSubmit}>提交</button>
          </div>
      )
  }
}
export default ReverseInherit1( ReverseInput);