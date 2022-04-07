import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { store } from './components/Redux/RootReducer.js/configStore';
import { Provider} from 'react-redux'
// import { Provider } from 'react-redux';
// import store from '../src/todo/store';
ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <Provider store= {store} >
      <App />

    </Provider>

    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
