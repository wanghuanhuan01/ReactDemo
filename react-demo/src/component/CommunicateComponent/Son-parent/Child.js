import React from "react";

class Child extends React.Component{
	constructor(props){
      super(props);
	    this.state={
	    	msg: '子组件msg传值'
	    }
    }
    //通过props调用回调函数传值
    trans=()=>{
        this.props.callback(this.state.msg);
    }
    render(){
        return(
            <div>
                <button onClick={this.trans}>激发trans事件，传值给父组件</button>
            </div>
        )
    }
}

export default Child;