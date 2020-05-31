import React from 'react';
import {Link} from 'react-router-dom'
import './NavList/Style/NavContainer.css';

function NavContainer() {
    return (
            <div className="container-navContainer">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/Category">Category</Link>
                <Link className="link" to="/Products">Products</Link>
                <Link className="link" to="/AdminArea">Admin area</Link>   
            </div>      
    )
}

export default NavContainer;
