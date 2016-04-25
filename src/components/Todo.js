import React, { Component, PropTypes }      from 'react';
import { connect }                          from 'react-redux';
import { bindActionCreators }               from 'redux';
import * as TodoAction                      from '../actions/';
import classNames                           from 'classnames'

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
        let text = this.state.text;
        let trash = (<a href="javascript:" onClick={ deleteTodo } className="ctrlIcon">
                      <i className="fa fa-trash fa-2x" aria-hidden="true"></i>
                    </a>);
        let ItemText = (<p className={ classNames({ 'complete': this.props.completed}, 'text' )} onDoubleClick={ ()=> this.setState({isEdit: true})}>
                          {text}
                        </p>);
        let completeItem = (<a href="javascript:" onClick={ toggleTodo } className="textIcon">
                              <i className="fa fa-genderless fa-3x" aria-hidden="true"></i>
                            </a>);
        // Edit
        if(this.state.isEdit){
          ItemText = (<input className="text" type='text' value={text} onChange={ this.changeContent } onKeyPress = {this._handleKeyPress}/>);
        }
        // Completed
        if(this.props.completed){
          completeItem = (<a href="javascript:" onClick={ toggleTodo } className={classNames({ 'complete': this.props.completed},'textIcon')}>
                            <i className="fa fa-check-circle fa-3x" aria-hidden="true"></i>
                          </a>);
          trash = '';
        }
        return (
          <ul className="clearfix">
            <li className="item">
                <div className="item-content">
                    {completeItem}
                    {ItemText}
                </div>
                <div className="item-ctrl">
                    <a href="javascript:" onClick={ toggleStarTodo } className={classNames({ 'stared': this.props.star},'ctrlIcon')} >
                      <i className={classNames({ 'fa-star-o': !this.props.star , 'fa-star': this.props.star},'fa','fa-2x')}
                        aria-hidden="true"></i>
                    </a>
                    {trash}
                </div>
            </li>
            {/*
            {completeItem}
            <button onClick={ deleteTodo }>Delete</button>
            <button onClick={ toggleStarTodo }>{starText}</button>
            {ItemText} */}
          </ul>
        )
    }
}

export default Todo;
