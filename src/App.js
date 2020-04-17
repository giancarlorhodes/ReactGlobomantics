import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// old

class AppComp extends Component
{
  render() {
      return (
        // jsx
        <div className="App">
          <header className="App-header">
            {/* src here is prop very different the html attribute */}
            <img src={logo} className="App-logo" alt="log"/>
            <h1 className="App-title">Welcome to React!!! My new AppComp component</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code>
          </p>
        </div>
      );
  }
}



// // new
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React Giancarlo
//         </a>
//       </header>
//     </div>
//   );
// }

export default AppComp;
