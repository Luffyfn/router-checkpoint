import React from 'react';
import {Route, Link} from 'react-router-dom';
import './Style/Category.css';

const Category = ({ match }) => {
    return( 
        <div className="container-category"> 
            <Link className="link-category" to={`${match.url}/Shoes`}>Shoes</Link>
            <Link className="link-category" to={`${match.url}/Boots`}>Boots</Link>
            <Link className="link-category" to={`${match.url}/Footwear`}>Footwear</Link>

            <Route path={`${match.path}/:name`} render= {({match}) =>( <div> <h3> {match.params.name}</h3></div>)}/>
        </div>
    )
}
export default Category;