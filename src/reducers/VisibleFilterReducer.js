import types  from '../constants';

function visibleFilter(state = "SHOW_ALL", action) {
  switch (action.type) {
    case types.SET_VISIBLE:
      return action.payload;
    default:
      return state;
  }
}

export default visibleFilter;

