import React, { Component, PropTypes }      from 'react';
import { connect }                          from 'react-redux';
import { bindActionCreators }               from 'redux';
import * as TodoAction                      from '../actions/';
import classNames                           from 'classnames'

class Todo extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          isEdit:false,
          isIconHovering:false,
          itemHover:false,
          text:this.props.text
        }
        this.changeContent = this.changeContent.bind(this);
        this._handleKeyPress = this._handleKeyPress.bind(this);
    }

    handleIconHover (action) {
      if(action === 'leave' && !this.state.isIconHovering){
        return;
      }
      this.setState({isIconHovering: !this.state.isIconHovering});
    }

    handleItemHover (action) {
      if(action === 'leave' && !this.state.itemHover){
        return;
      }
      this.setState({itemHover: !this.state.itemHover});
    }

    changeContent (event){
      this.setState({text: event.target.value});
    }

    _handleKeyPress (e){
      if (e.key === 'Enter') {
            // this.setState({isEdit: false});
            if(this.state.text === '') return;
            this.props.editTodo();
            this.props.textUpdate(this.state.text);
          }
    }

    starIcon (){
      const style = {
        display: ( (this.state.itemHover && !this.props.isEdit) || this.props.star ) ? '': 'none'
      };
      return ( <a href="javascript:"
                  onClick={ this.props.toggleStarTodo }
                  className={classNames({ 'stared': this.props.star},'ctrlIcon')}
                  style={style}>
                    <i className={classNames({ 'fa-star-o': !this.props.star , 'fa-star': this.props.star},'fa','fa-2x')}
                      aria-hidden="true"></i>
                </a> );
    }

    trashIcon (){
      const style = {
        display: (this.state.itemHover && !this.props.isEdit)? '': 'none'
      };
      return ( <a href="javascript:"
                  onClick={ this.props.deleteTodo }
                  className="ctrlIcon"
                  style={style}>
                  <i className="fa fa-trash fa-2x" aria-hidden="true"></i>
                </a> );
    }

    itemText_completed () {
      return (<span>
                  <p className={ classNames({ 'complete': this.props.completed}, 'text' )}>
                    {this.state.text}
                  </p>
              </span> );
    }

    itemText_edit () {
      return ( <input
                  className="text"
                  style={{cursor: 'pointer'}}
                  ref={ input => {
                        if(input === null) return;
                          input.focus();
                      }}
                  type='text' value={this.state.text}
                  onChange={ this.changeContent }
                  onblur={ this._handleKeyPress }
                  onKeyPress = {this._handleKeyPress}/>);
    }

    itemText (){
      return ( <a href="javascript:"
                  onClick={
                    () => {
                      if(this.props.isEdit) return;
                      this.props.editTodo();
                    }
                  }>
                  <p className={ classNames({ 'complete': this.props.completed , 'textHover' : this.state.isIconHovering}, 'text' )}>
                    {this.state.text}
                  </p>
               </a> );
    }

    itemToggle_completed = () => (<a href="javascript:"
                                    onClick={ this.props.toggleTodo }
                                    className={classNames({ 'complete': this.props.completed},'textIcon')}>
                                    <i className="fa fa-check-circle fa-3x" aria-hidden="true"></i>
                                  </a>)

    itemToggle_edit = () => (<span className={classNames({ 'complete': this.props.completed},'textIcon')}
                                style={{'color': '#717677'}}>
                              <i className="fa fa-genderless fa-3x" aria-hidden="true"></i>
                            </span>)
    itemToggle (){
      return (<a href="javascript:"
                onClick={() => {
                    if(this.props.isEdit) return;
                    this.props.toggleTodo();
                  }}
                onMouseEnter={this.handleIconHover.bind(this,'enter')}
                onMouseLeave={this.handleIconHover.bind(this,'leave')}
                className="textIcon">
                <i className={classNames({
                                'fa-genderless': !this.state.isIconHovering,
                                'fa-check-circle': this.state.isIconHovering
                              },'fa','fa-3x')}
                    aria-hidden="true"></i>
              </a>);
    }

    render() {
        let itemText,itemToggle;
        if(this.props.completed){
          itemText=this.itemText_completed();
          itemToggle = this.itemToggle_completed();
        }else if (this.props.isEdit && this.props.editCurrent){
          itemText=this.itemText_edit();
          itemToggle = this.itemToggle_edit();
        }else{
          itemText=this.itemText();
          itemToggle = this.itemToggle();
        }
        return (
          <li className="clearfix item" onMouseEnter={this.handleItemHover.bind(this,'enter')} onMouseLeave={this.handleItemHover.bind(this,'leave')}>
              <div className="item-content">
                  {itemToggle}
                  {itemText}
              </div>
              <div className="item-ctrl">
                  {this.starIcon()}
                  {this.trashIcon()}
              </div>
          </li>
        )
    }
}

export default Todo;
