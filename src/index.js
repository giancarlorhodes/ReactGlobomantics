import React from 'react'; // node_modules modules // react engine
import ReactDOM from 'react-dom'; // browser support
import './index.css';
import AppComp from './App'; // ./ indicates local, look in my current directory
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// entry point for the application


//ReactDOM.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//  document.getElementById('root')
//);

ReactDOM.render(<AppComp/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

//serviceWorker.unregister();
