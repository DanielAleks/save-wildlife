import React from 'react';
import logo from './logo.svg';
import './App.css';
import Index from './components';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux'
import { ADD_ACCESSOR } from './reducers/types';

// const initialState = 0

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case "ADD_ACCESSOR":
//       return {
//         accessor: state + 1
//       }
//   }
//   return state
// }

// const store = createStore(reducer)
// store.dispatch({type: ADD_ACCESSOR})

function App() {
  return (
    // <Provider store={store}>
    <Index />
    // </Provider>
  );
}
// const mapStateToProps = state => ({
//   accessor: state.accessor
// })

// export default connect(mapStateToProps)(App);
export default App;
