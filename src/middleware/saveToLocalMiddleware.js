const db = window.localStorage;
export default function saveToLocalMiddleware( objMethods ) {
  return (store) => {
    return (next) => (action) => {
      let result = next(action);
      // db.setItem('mydb', JSON.stringify( {todos:store.getState().todos} ));
      db.setItem('mydb', JSON.stringify(store.getState()) );
      return result;
    };
  }
}
