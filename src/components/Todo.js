import React, { Component, PropTypes }      from 'react';
import { connect }                          from 'react-redux';
import { bindActionCreators }               from 'redux';
import * as TodoAction                      from '../actions/';

class Todo extends Component {
    constructor(props, context) {
        super(props, context);
        this.changeContent = this.changeContent.bind(this);
        this._handleKeyPress = this._handleKeyPress.bind(this);
    }

    state = {
      isEdit:false,
      text:this.props.text
    }

    changeContent (event){
      this.setState({text: event.target.value});
    }

    _handleKeyPress (e){
      if (e.key === 'Enter') {
            this.setState({isEdit: false});
            this.props.textUpdate(this.state.text);
          }
    }

    render() {
        const toggleTodo = this.props.toggleTodo;
        const deleteTodo = this.props.deleteTodo;
        const toggleStarTodo = this.props.toggleStarTodo;
        const starText = this.props.star ? 'UnStar' : 'Star';
        let text = this.state.text;
        let ItemText = (<span onDoubleClick={ ()=> this.setState({isEdit: true})}>{text}</span>);
        let completeItem = (<input type="checkbox" onChange={ toggleTodo }/>);
        if(this.state.isEdit){
          ItemText = (<input type='text' value={text} onChange = { this.changeContent }  onKeyPress = {this._handleKeyPress}/>);
        }
        if(this.props.completed){
          completeItem = (<input type="checkbox" checked onChange={ toggleTodo }/>);
        }
        return (
          <div>
            {completeItem}
            <button onClick={ deleteTodo }>Delete</button>
            <button onClick={ toggleStarTodo }>{starText}</button>
            {ItemText}
          </div>
        )
    }
}

export default Todo;
