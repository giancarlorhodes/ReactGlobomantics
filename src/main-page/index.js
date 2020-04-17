import React, { Component } from 'react';
// import logo from './logo.svg';
import './main-page.css';
import Header from './header';

// old
// example of a class component - support state and lifecycle methods
class AppComp extends Component
{

  // first step in lifecycle methods
  constructor(props){
    super(props);
    this.state = {};
  }

  // occurs just after rendering
  componentDidMount(){
    this.fetchHouses();
  }

  // build a arrow function to fetch the Houses
  fetchHouses = () => {
    fetch('/houses.json')
    .then(response => response.json())
    .then(allHouses => {
      this.allHouses = allHouses;
      this.determineFeaturedHouse();
    })
  }
  
  
  determineFeaturedHouse = () => {

    if (this.allHouses){
      const randomIndex = Math.floor(Math.random() * this.allHouses.length);
      const featuredHouse = this.allHouses[randomIndex];
      this.setState({ featuredHouse });
    }

  }


  render() {
      return (
        // // jsx old
        // <div className="App">
        //   <header className="App-header">
        //     {/* src here is prop very different the html attribute */}
        //     <img src={logo} className="App-logo" alt="log"/>
        //     <h1 className="App-title">Welcome to React!!! My new AppComp component</h1>
        //   </header>
        //   <p className="App-intro">
        //     To get started, edit <code>src/App.js</code>
        //   </p>
        // </div>

        <div className="container">
          <Header subtitle="Providing houses in Columbia, Missouri"/>
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
