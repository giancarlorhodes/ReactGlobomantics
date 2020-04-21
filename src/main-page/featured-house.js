import React from 'react';
import House from '../house';

const FeaturedHouse  = (props) => {
    
    if (props.house) return (  
        <div>
            <div className="row featuredHouse">
                <h3 className="col-md-12 text-center">
                    Featured House
                </h3>
            </div>
            <House house={props.house} />
        </div>
    )
    else{
        return(<div>No #?!##?! featured house at this time. Sorry !!!</div>)
    }
}
 
export default FeaturedHouse;