import React, { Component } from 'react';
import Child from './Child.js'; 

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      msg: '父组件初始msg'
    }
  }

  //父组件回调函数，更新state，进而更新父组件。
  callback=(msg)=>{
    this.setState({msg});
  }

  render() {
    return (
      <div className="App">
        <p>子组件传值实验: {this.state.msg}</p>
        <Child callback={this.callback} ></Child>
      </div>
    );
  }
}

export default App;
