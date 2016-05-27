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
      iconHover:false,
      itemHover:false,
      text:this.props.text
    }

    handleIconHover (action) {
      if(action === 'leave' && !this.state.iconHover){
        return;
      }
      this.setState({iconHover: !this.state.iconHover});
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
      if( (this.state.itemHover && !this.props.isEdit) || this.props.star ){
        return ( <a href="javascript:"
                    onClick={ this.props.toggleStarTodo }
                    className={classNames({ 'stared': this.props.star},'ctrlIcon')} >
                      <i className={classNames({ 'fa-star-o': !this.props.star , 'fa-star': this.props.star},'fa','fa-2x')}
                        aria-hidden="true"></i>
                  </a> );
      }else{
        return '';
      }
    }

    trashIcon (){
      if(this.state.itemHover && !this.props.isEdit){
        return ( <a href="javascript:" onClick={ this.props.deleteTodo } className="ctrlIcon">
                              <i className="fa fa-trash fa-2x" aria-hidden="true"></i>
                            </a> );
      }else{
        return '';
      }
    }

    ItemText (){
      if(this.props.completed){
        return (<span href="javascript:">
                    <p className={ classNames({ 'complete': this.props.completed}, 'text' )}>
                      {this.state.text}
                    </p>
                </span> );
      }else if (this.props.isEdit && this.props.editCurrent){
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
      }else{
        return ( <a href="javascript:"
                    onClick={
                      () => {
                        if(this.props.isEdit) return;
                        this.props.editTodo();
                      }
                    }>
                    <p className={ classNames({ 'complete': this.props.completed , 'textHover' : this.state.iconHover}, 'text' )}>
                      {this.state.text}
                    </p>
                 </a> );
      }
    }

    itemToggle (){
      if(this.props.completed){
        return (<a href="javascript:"
                  onClick={ this.props.toggleTodo }
                  className={classNames({ 'complete': this.props.completed},'textIcon')}>
                  <i className="fa fa-check-circle fa-3x" aria-hidden="true"></i>
                </a>);

      }else if(this.props.isEdit && this.props.editCurrent){
        return (<span className={classNames({ 'complete': this.props.completed},'textIcon')}
                    style={{'color': '#717677'}}>
                  <i className="fa fa-genderless fa-3x" aria-hidden="true"></i>
                </span>);
      }else{
        return (<a href="javascript:"
                  onClick={
                    () => {
                      if(this.props.isEdit) return;
                      this.props.toggleTodo();
                    }
                  }
                  onMouseEnter={this.handleIconHover.bind(this,'enter')}
                  onMouseLeave={this.handleIconHover.bind(this,'leave')}
                  className="textIcon">
                  <i className={classNames({
                                  'fa-genderless': !this.state.iconHover,
                                  'fa-check-circle': this.state.iconHover
                                },'fa','fa-3x')}
                      aria-hidden="true"></i>
                </a>);
      }
    }

    render() {
        return (
          <li className="clearfix item" onMouseEnter={this.handleItemHover.bind(this,'enter')} onMouseLeave={this.handleItemHover.bind(this,'leave')}>
              <div className="item-content">
                  {this.itemToggle()}
                  {this.ItemText()}
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
