import React, { Component } from 'react';
// import logo from './logo.svg';
import './main-page.css';
import Heady from './header';
import FeaturedHouse from './featured-house';
import HouseFilter from './house-filter';
import SearchResults from '../search-results';
import HouseDetail from '../house';

// old
// example of a class component - support state and lifecycle methods
class App extends Component
{

  // example of property intializer
  // state = {};

  // first step in lifecycle methods
  // initialize the STATE
  constructor(props){
    super(props); // calling the base class
    this.state = {}; // empty object
  }

  // lifecycle order - constructor(), render(), componentDidMount()
  // other useful methods during Updating - getDerivedStateFromProps(), shouldComponentUpdate(), 
  // render(), componentDidUpdate()
  // unmounting - componentWillUnmount()
  // error scenerio - componentDidCatch()
  // occurs just after rendering - render()
  componentDidMount(){
    this.fetchHouses();
  }

  // build a arrow function to fetch the Houses
  fetchHouses = () => {
    fetch('/houses.json')
    .then(rsp => rsp.json())
    .then(allHouses => {
      this.allHouses = allHouses;
      this.determineFeaturedHouse();
      this.determineUniqueCountries();
    })
  }


  filterHouses = (country) => {

    this.setState({ activeHouse: null});
    const filteredHouses = this.allHouses.filter((h) => h.country === country);
    this.setState({ filteredHouses });
    this.setState({ country });

  }


  setActiveHouse = (house) => {

    this.setState({ activeHouse: house });

  }
  
  // featured house is stored in the STATE of the component
  // STATE - private data for the component
  // this code picks a random house right now
  // everything you put into STATE should be used in the render() method
  // STATE should always be set using setState so that a re-render occurs
  determineFeaturedHouse = () => {

    if (this.allHouses)
    {
      const randomIndex = Math.floor(Math.random() * this.allHouses.length);
      const featuredHouse = this.allHouses[randomIndex];
      this.setState({ featuredHouse }); // calling setState triggers re-render
    }

  }
 
  // houses objects to string array
  determineUniqueCountries = () => {

    const countries = this.allHouses 
    ? Array.from(new Set(this.allHouses.map(h => h.country))) : [];
    countries.unshift(null);
    this.setState({ countries }); // adding to the state, not overwriting the object

  }


  // render() {
  //     return (
  //       // // jsx old
  //       // <div className="App">
  //       //   <header className="App-header">
  //       //     {/* src here is prop very different the html attribute */}
  //       //     <img src={logo} className="App-logo" alt="log"/>
  //       //     <h1 className="App-title">Welcome to React!!! My new AppComp component</h1>
  //       //   </header>
  //       //   <p className="App-intro">
  //       //     To get started, edit <code>src/App.js</code>
  //       //   </p>
  //       // </div>

  //       <div className="container">
  //         <Header subtitle="Providing houses in Columbia, Missouri"/> {/* notice that this is subtitle is passed into to Header jsx */}
  //         <HouseFilter countries={this.state.countries} filterHouses = {this.filterHouses} />
  //         <FeaturedHouse house={this.state.featuredHouse} />
  //       </div>
  //     );
  // }


  render() {
    let activeComponent = null;
    if (this.state.country)
    activeComponent = <SearchResults country={this.state.country} 
      filteredHouses={this.state.filteredHouses} setActiveHouse={this.setActiveHouse} />;
    if (this.state.activeHouse)
      activeComponent = <HouseDetail house={this.state.activeHouse}/>;
    if (!activeComponent)
      activeComponent = <FeaturedHouse house={this.state.featuredHouse} />;
    return (
      <div className="container">
        <Heady subtitle="Providing houses all over the world"/>
        <HouseFilter countries={this.state.countries} filterHouses={this.filterHouses} />
        {activeComponent}
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

export default App;
