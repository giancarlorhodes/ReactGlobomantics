import React from 'react';
import logo from './GloboLogo.png';


// function component that just output that outputs jsx directly
// simpler and more direct for a bit of jsx - no state, no lifecycle
// inside the () is where we might pass our props - State, Render() from the outside into the component
// props is intented to be a read-only object
const Header = (props) => (
    <header className="row">
        <div className="col-md-5">
            <img src={logo} className="logo" alt="logo"/>
        </div>
        <div className="col-md-7 mt-5 subtitle">
            {/* Providing houses in Columbia, Missouri */}
            {props.subtitle}
        </div>
    </header>
);


export default Header;