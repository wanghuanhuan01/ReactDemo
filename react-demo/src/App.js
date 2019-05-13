import React, { Component } from 'react';
import List from './component/List/List';
import ControlInput from './component/HigherComponent/extendAgent/ControlInput';
import Father from './component/CommunicateComponent/Parent-son/Father';
import FatherDemo from './component/CommunicateComponent/Son-parent/Fatherdemo';
import Producer from './component/CommunicateComponent/CrossComparison/Producer';
import Publisher from './component/CommunicateComponent/Nonested/Publisher';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleItemChange = this.handleItemChange.bind(this);
  }
  handleItemChange(item) {
    console.log(item);
  }
  render() {
    return (
    <div>
      <List list={[{text:'小白'}, {text: '小粉'}]}  handleItemChange={this.handleItemChange}/>
      <ControlInput />
      <Father />
      <FatherDemo />
      <Producer />
      <Publisher/>
    </div>
    );
  }
}

export default App;
