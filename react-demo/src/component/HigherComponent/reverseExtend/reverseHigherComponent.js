import React from 'react';
const ReverseInherit1 = BaseComponent =>
  class extends BaseComponent{ // 继承传入组件
        // 在这里定义监听value值变化的函数
      valueChange = (eve) => {
          this.setState({value:eve.target.value})
      }
        // 在这里重写提交的函数
      toSubmit = () => {
          alert(`您要提交的值是：${this.state.value}`);
      }

      render(){
          const { value } = this.state;
          const superEle =  super.render();// 拿到父组件的要渲染的结构对象，做渲染劫持的关键
          let newElement = React.cloneElement(superEle,this.props,superEle.props.children);
          if(value){// 如果value有值就不做任何处理返回父组件的render
              return (
                  super.render()
              )
          }else{// value无值则对原来的结构进行调整
              newElement.props.children.splice(1,1);
              return (newElement);
          }
      }
  }
  export default ReverseInherit1;