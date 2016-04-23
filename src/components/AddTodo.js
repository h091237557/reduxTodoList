import React                    from 'react';
import { connect }              from 'react-redux';
import { bindActionCreators }   from 'redux';
import * as TodoAction          from '../actions/';

let TodosInput = ({ AddTodo }) => {
  let inputText;
  return (
    <div>
      <input ref = {node => {
        inputText = node;
      }} />
      <button onClick={ () => {
        if(inputText.value === ''){
          return;
        }
        AddTodo(inputText.value);
        inputText.value = '';
      }}> Add Todo </button>
    </div>
  );
};
TodosInput = connect(
    state => state,
    dispatch => {
      return bindActionCreators(TodoAction, dispatch);
    }
)(TodosInput);

export default TodosInput;
