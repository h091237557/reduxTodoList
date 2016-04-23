import { combineReducers }             from 'redux';
import todos                           from './TodosReducer';
import visible                         from './VisibleFilterReducer';
import { routerReducer }               from 'react-router-redux';


export default combineReducers({
  todos,
  visible,
  routing: routerReducer
});
