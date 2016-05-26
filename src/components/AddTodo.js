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
    <div className="addTodo">
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
        <a href="javascript:"><i className="fa fa-plus fa-3x" aria-hidden="true"></i></a>
      </div>
    </div>
  );
};
// TodosInput = connect(
//     state => state,
//     dispatch => {
//       return bindActionCreators(TodoAction, dispatch);
//     }
// )(TodosInput);

export default TodosInput;
