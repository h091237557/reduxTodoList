import React                    from 'react';
import { connect }              from 'react-redux';
import { bindActionCreators }   from 'redux';
import * as TodoAction          from '../actions/';

let TodosInput = ({ AddTodo }) => {
  let inputText;
  const _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if(inputText.value === '') return;
      AddTodo(inputText.value);
      inputText.value = '';
    }
  }
  return (
    <section className="addTodo">
      <input className="addTodo-input" type="text"
        placeholder="Type"
        onKeyPress = {_handleKeyPress}
        ref = {node => {
          inputText = node;
        }} />
      <div className="addTodo-btn" onClick={ () => {
        if(inputText.value === ''){
          return;
        }
        AddTodo(inputText.value);
        inputText.value = '';
      }}>
        <a href="javascript:"><i className="fa fa-plus fa-1x" aria-hidden="true"></i></a>
      </div>
    </section>
  );
};

export default TodosInput;
