import React from 'react';
import logo from './GloboLogo.png';


// function component that just outputs jsx directly
// simpler and more direct for doing a bit of jsx - no state, no lifecycle
// inside the () is where we might pass our props (arguments passed in from the outside) 
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


class Testing{}

export default Header; // when we use the default keyword, it allows the importing file to use a name of it's choosing and no {} needed
